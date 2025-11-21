import express from "express";
import process from "process";
import "dotenv/config";
import generate from "./controller/generate.js";
import cors from "cors";

// import newMessageRouter from "./routes/newMessageRouter.js"; //cant do this as i cannot access messages

const PORT = parseInt(process.env.PORT) || 8000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/gen", generate);

app.listen(PORT, () => {
  console.log(`server is open at port: ${PORT}`);
});
