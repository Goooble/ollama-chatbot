import pool from './pool.js';

async function getMessages(){
    const data = await pool.query("SELECT * FROM message ORDER BY sent DESC");
    return data.rows;
}

async function createMessage(username, text){
    await pool.query("INSERT INTO message (username, text) VALUES($1, $2)", [username, text])
}

export {getMessages, createMessage};