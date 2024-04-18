const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Ruta al archivo HTML
    const filePath = path.join(__dirname, 'index.html');

    // Leer el archivo HTML
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error al cargar la página.');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}/`);
});
