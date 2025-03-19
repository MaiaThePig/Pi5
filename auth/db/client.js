import mongoose from "mongoose";
import UserSchema from "./schemes/user.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("Conectado a DB");
  } catch (err) {
    console.error("Erro ao conectar na DB", err);
    process.exit(1);
  }
};

const models = {
  User: mongoose.model("users", UserSchema)
};

export { models, connectDB };
