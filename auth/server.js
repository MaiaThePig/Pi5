import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectDB } from "./db/client.js";
import cookieParser from "cookie-parser";
import loginRoute from "./routes/POST/login.js";
import registerRoute from "./routes/POST/register.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

connectDB();

app.use(loginRoute.path, loginRoute.cb);
app.use(registerRoute.path, registerRoute.cb);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome to Express with EJS' });
});
app.get('/', (req, res) => {
    res.render('login', { title: 'Welcome to Express with EJS' });
});
app.get('/', (req, res) => {
    res.render('register', { title: 'Welcome to Express with EJS' });
});