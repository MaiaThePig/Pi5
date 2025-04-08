const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'auth/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'auth/assets')));

let tasks = []; // Lista de tarefas

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('home', { tasks });
});

// Rota para adicionar tarefas
app.post('/add-task', (req, res) => {
  const { task } = req.body;
  if (task) {
    tasks.push(task);
  }
  res.redirect('/');
});

// Rota para a página de login
app.get('/login', (req, res) => {
  res.render('login');
});

// Rota para a página de registro
app.get('/register', (req, res) => {
  res.render('register');
});

// Rota para a página de recuperação de senha
app.get('/recover', (req, res) => {
  res.render('recover');
});

// Rota para processar o registro
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  if (username && email && password) {
    console.log(`Usuário registrado: ${username}, ${email}`);
    return res.json({ ok: true, message: 'Registro bem-sucedido' });
  }
  res.json({ ok: false, message: 'Erro ao registrar. Verifique os dados.' });
});

// Rota para processar o login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'teste@formatbot.com' && password === '123456') {
    return res.json({ ok: true, message: 'Login bem-sucedido' });
  }
  res.json({ ok: false, message: 'E-mail ou senha inválidos' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione Ctrl+C para encerrar o servidor.');
});