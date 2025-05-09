import express, {Router} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import {readdirSync} from "fs";
import {resolve} from "path";

import {setViews} from "./routes/views.route.js";

const app = express();
const PORT = 3000;

const viewsDir = "views";
const assetsDir = "assets";
const routesDir = "routes";

dotenv.config();

app.set('views', viewsDir);
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(assetsDir));

//setando as rotas de view
setViews(app)

//carregando as rotas do /api 
async function loadRoutes(){
  const apiRouter = Router();
  const files = readdirSync(routesDir);

  for(const file of files){
    if(file == "views.route.js"){continue;}
    const filePath = resolve(routesDir, file);

    const {doRoute} = await import(filePath);

    doRoute(apiRouter);
  }
  app.use("/api", apiRouter);
}
loadRoutes();

//carregando o mongoose pra possibilitar o resto da aplicaçao
async function connectDatabase(){
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
    });
    console.log("Conectado a DB");
  } catch (err) {
    console.error("Erro ao conectar na DB", err);
    process.exit(1);
  }
};
connectDatabase();

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log('Pressione Ctrl+C para encerrar o servidor.');
});
