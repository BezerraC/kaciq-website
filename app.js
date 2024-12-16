const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Diretório de arquivos públicos
app.use(express.static(path.join(__dirname, 'public')));

// Importando rotas
const indexRoutes = require('./routes/index');
const contactRoutes = require('./routes/contact');
const aboutRoutes = require('./routes/about');

// Usando rotas
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);

app.use((req, res) => {
    res.status(404).render("layout", {
        body: '404',
        title: "Error 404",
        bgColor: 'dark'
      });;
});


// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
