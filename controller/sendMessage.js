
import { createMessage } from "../db/queries.js";
async function sendMessage(req, res){
    console.log(req.body)
    await createMessage(req.body.user, req.body.text);
    console.log("text sent");
    res.redirect("/");
}

export default sendMessage;