import { Router } from "express";
import sendMessage from "../controller/sendMessage.js";
const newMessageRouter = Router();

newMessageRouter.get("", (req, res) => {
  res.render("form");
});

newMessageRouter.post("", sendMessage);

export default newMessageRouter;
