import {getMessages} from '../db/queries.js';

async function displayMessages(req, res){
    const data = await getMessages();
    console.log(data[0])
    res.render('index', {messages: data});
}

export default displayMessages;