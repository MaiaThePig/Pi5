import { signToken } from "../../middleware/auth.js";
import { models } from "../../db/client.js";
import bcrypt from "bcrypt";

export default {
  path: "/register",
  cb: async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!", ok: false });
    }

    try {
      const { User } = models;
      const existingUser = await User.findOne({ email }).exec();
      if (existingUser) {
        return res.status(400).json({ message: "E-mail já cadastrado!", ok: false });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();

      const jwtToken = signToken({ id: newUser._id });

      res.cookie("token", jwtToken, { httpOnly: true });
      res.json({ _id: newUser._id, ok: true });

    } catch (error) {
      console.error("Erro no registro:", error);
      res.status(500).json({ message: "Erro interno no servidor!", ok: false });
    }
  }
};
