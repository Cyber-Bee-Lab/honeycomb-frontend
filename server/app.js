const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Conexão ao MongoDB com tratamento de erro e sucesso
mongoose.connect('mongodb://localhost:27017/Honeycombs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado ao MongoDB com sucesso!');
})
.catch(err => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
});

// Definir o modelo de dados para o MongoDB
const Usuario = mongoose.model('Usuario', new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}));

// Middleware para interpretar o corpo do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos (como o seu index.html)
app.use(express.static('public'));

// Rota para lidar com o login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Usar async/await para buscar o usuário
        const usuario = await Usuario.findOne({ email, password }).exec();

        if (!usuario) {
            return res.status(400).send('Usuário não encontrado ou senha incorreta.');
        }

        res.send('Login bem-sucedido!');
    } catch (err) {
        console.error('Erro ao buscar usuário:', err.message);
        res.status(500).send('Erro no servidor.');
    }
});

// Inicializar o servidor
app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});
