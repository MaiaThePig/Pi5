import { models } from "../../db/client.js"; 
import { signToken } from "../../middleware/auth.js";
import bcrypt from "bcrypt";

export default {
    path: "/login",
    cb: async (req, res) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email e senha são obrigatórios!", ok: false });
        }

        try {
            const { User } = models;
            const user = await User.findOne({ email }).exec();

            if (!user || !(await bcrypt.compare(password, user.password))) {
                return res.status(401).json({ message: "Usuário ou senha incorretos!", ok: false });
            }

            const jwtToken = signToken({ id: user._id });

            res.cookie("token", jwtToken, { httpOnly: true });
            res.json({ _id: user._id, ok: true });

        } catch (error) {
            console.error("Erro no login:", error);
            res.status(500).json({ message: "Erro interno no servidor!", ok: false });
        }
    }
};
