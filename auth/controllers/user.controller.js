import {UserModel} from "../models/user.model.js";

import {signToken} from "../middlewares/auth.middleware.js"

import bcrypt from "bcrypt";

class UserController{
  constructor(){};

  async getUserInfo(req, res){
    return res.json({...req.user, ok: true});
  }

  async listUsers(req, res){
    try {
      const users = await UserModel.find({}, {password: 0});

      return res.json({data: users, ok: true});
    } catch (err) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }
  }

  async logoutUser(req, res){
    try {
        // Remover o cookie de autenticação
        res.clearCookie("token", { httpOnly: true });

        return res.json({ message: "Logout realizado com sucesso", ok: true });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno no servidor", ok: false });
    }
  }


  async loginUser(req, res){
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
      return res.status(400).json({ message: "Email e senha são obrigatórios!", ok: false });
    }

    try {
      const user = await UserModel.findOne({email}).exec();

      if(!user){
        return res.status(401).json({message: "Senha ou email inválido", ok: false})
      }

      const isPasswordRight = await bcrypt.compare(password, user.password);

      if(!isPasswordRight){
        return res.status(401).json({message: "Senha ou email inválido", ok: false})
      }

      const data = {id: user._id, username: user.username, email: user.email, role: user.role};

      const jwtToken = signToken(data);

      res.cookie("token", jwtToken, {httpOnly: true});
      return res.json({
        email: user.email,
        user: user.username,
        ok: true
      })

    } catch (error) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }
  }

  async registerUser(req, res){
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    if(!username || !email || !password){
      return res.status(400).json({message: "Todos os campos são obrigatórios", ok: false});
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const payload = {
      username,
      email,
      password: hashedPass
    }

    try {
      const email = req.body.email;
      const user = await UserModel.findOne({email}).exec();

      if(user){
        return res.status(401).json({message: "Email já registrado", ok: false});
      }

      const newUser = new UserModel(payload);
      const savedUser = await newUser.save();

      return res.json({
        email,
        username: req.body.username,
        ok: true
      })
    } catch (error) {
      return res.status(500).json({message: "Erro interno no servidor", ok: false})
    }

  }
}

export default new UserController();
