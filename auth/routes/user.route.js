import {Router} from "express";

import {verifyToken, verifyIsAdmin} from "../middlewares/auth.middleware.js";
import userController from "../controllers/user.controller.js";

const router = Router();

router.get("/me", verifyToken, userController.getUserInfo);

router.post("/logout", verifyToken, userController.logoutUser)

router.get("/list", verifyToken, verifyIsAdmin, userController.listUsers);

router.post("/login", userController.loginUser);
router.post("/register", userController.registerUser);

export function doRoute(server){
  server.use("/user", router);
}
