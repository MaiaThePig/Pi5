import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "chave-secreta";

export const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  
  if (!token) {
    return res.status(401).json({ message: "Acesso negado!", ok: false });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido!", ok: false });
  }
};

export const redirectLogin = (req, res, next) => {
  const token = req?.cookies?.token;
  
  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    next();
  } catch (error) {
    res.redirect("/login");
  }
}

export const verifyIsAdmin = (req, res, next) => {
  const token = req?.cookies?.token;
  
  if (!token) {
    return res.status(401).json({ message: "Acesso negado!", ok: false });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);

    if(decoded.role !== "admin"){
      return res.status(403).json({ message: "Usuário não é admin!", ok: false });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Token inválido!", ok: false });
  }
};
