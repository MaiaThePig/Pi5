import {Router} from "express";

import {redirectLogin} from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/',  redirectLogin, (req, res) => {
  res.render('home');
});
router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/register', (req, res) => {
  res.render('register');
});
router.get('/recover', (req, res) => {
  res.render('recover');
});

export function setViews(server){
  server.use("/", router);
}
