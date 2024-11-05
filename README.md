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

5. El siguiente archivo contiene las instrucciones para crear la base de datos y corra el comando en Mysql shell:
```bash
database_schema.sql
mysql -u username -p database_name < database_schema.sql
```
Cambie username y database_name por sus valores correspondientes.

### Ejecución del Proyecto
```
node src/server.js
```

Si la conexión es exitosa debe recibir el siguiente mensaje:
```bash
Servidor corriendo en http://localhost:3000
Conexión exitosa a SQL
```

### Puede hacer pruebas utilizando PostMan:
Este proyecto está diseñado para ser probado con Postman. Los usuarios pueden utilizar esta herramienta para verificar las distintas rutas de la API y probar las funcionalidades de carga de archivos. Actualmente, la API solo admite cargas de archivos de manera local en la base de datos SQL.
