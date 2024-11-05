const express = require('express');
const mysql = require('mysql2');
const rateLimit = require('express-rate-limit');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');

// Configuración de dotenv
dotenv.config();

const app = express();
const PORT = 3000;

// Conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    process.exit(1);
  }
  console.log('Conexión exitosa a SQL');
});

// Limitar el número de solicitudes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite de 100 solicitudes
});
app.use(limiter);

// Configuración de multer para almacenar archivos en /uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Ruta de prueba de servidor
app.get('/', (req, res) => {
  res.send('Servidor de carga de archivos activo');
});

// Endpoint para cargar archivos
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }
  
    const { filename, size, path: filepath } = req.file;
  
    // Guardar los detalles del archivo en la base de datos
    const query = 'INSERT INTO files (filename, filepath, size) VALUES (?, ?, ?)';
    db.query(query, [filename, filepath, size], (err, result) => {
      if (err) {
        console.error('Error al guardar el archivo en la base de datos:', err);
        return res.status(500).json({ message: 'Error al guardar en la base de datos' });
      }
      res.status(200).json({ message: 'Archivo subido y guardado exitosamente' });
    });
  });

// Endpoint para listar archivos
app.get('/files', (req, res) => {
    const query = 'SELECT id, filename, size, uploaded_at FROM files';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error al obtener la lista de archivos:', err);
        return res.status(500).json({ message: 'Error al obtener la lista de archivos' });
      }
      res.status(200).json(results);
    });
  });  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
