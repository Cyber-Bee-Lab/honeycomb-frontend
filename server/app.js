const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Definir rota para a página principal "/"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/tela-de-cadastro.html')); // Ajuste a página que deseja exibir
});

// Definir rota para outras páginas, por exemplo, login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/tela-de-login.html'));
});

app.get('/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/perfil.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
