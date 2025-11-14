import express from "express";
import process from "process";
import "dotenv/config";

// import newMessageRouter from "./routes/newMessageRouter.js"; //cant do this as i cannot access messages
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
const PORT = parseInt(process.env.PORT) || 8000;
const app = express();

app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));



// app.get("/new", (req, res) => {
//   res.render("form");
// });

app.use("/new", newMessageRouter);

app.get("/open/:id", (req,res)=>{
  res.render("message", {message: messages[req.params.id]});
})



// app.use('/', (req, res, next)=>{ //middleware to add messages to res.locals
//   res.locals.messages = messages;
//   next();
// })
app.use('/', indexRouter)


app.listen(PORT, () => {
  console.log(`server is open at port: ${PORT}`);
});
