const express = require('express');
const path = require('path');

const app = express();

// Configuración para servir archivos estáticos desde las carpetas "pages" y "styles"
app.use(express.static(path.join(__dirname, 'public/pages')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error al cargar la página.');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}/`);
});
