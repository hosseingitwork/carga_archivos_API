# carga_archivos_API
La Api permite a los usuarios cargar archivos con peso mayor a 1GB.

### Requisitos previos
Para correr este proyecto necesita tener instalado node.js y npm. Puede verificar las versiones actuales ejecutando los siguientes comandos:
```bash
node -v
npm -v
```

### Correr el proyecto:

1. Clone el repositorio:
```bash
git clone https://github.com/hosseingitwork/carga_archivos_API.git
```
2. Navegue al directorio del proyecto
3. Instale las dependencias:
```javascript
npm install
```
4. Configure las variables de entorno
Renombre el archivo .env.example a .env y complete la información necesaria, como las credenciales de la base de datos SQL, el puerto, entre otros.


tengo que hacer: mysqldump -u username -p alerta > database_schema.sql
en mi bash
node src/server.js

Debe recibir el siguiente mensaje:
```bash
Servidor corriendo en http://localhost:3000
Conexión exitosa a SQL
```
