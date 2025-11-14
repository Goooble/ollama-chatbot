#! /usr/bin/env node

import { Client } from "pg";
import process from "process";
const connectionString = process.argv[2];
const SQL = `
CREATE TABLE IF NOT EXISTS message (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text TEXT NOT NULL,
  sent TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO message (username, text) 
VALUES
  ('Bryan', 'Hello World!'),
  ('Odin', 'Hi there!'),
  ('Damon', 'This is a test message'),
  ('Alice', 'How are you?'),
  ('Bob', 'I am fine, thank you!'),
  ('Charlie', 'What about you?'),
  ('Eve', 'I am doing great!'),
  ('Frank', 'Good to hear!'),
  ('Grace', 'Lets meet up later!'),
  ('Heidi', 'Sure, sounds good!'),
  ('Ivan', 'I will bring the snacks!'),
  ('Judy', 'I will bring the drinks!'),
  ('Karl', 'I will bring the music!'),
  ('Leo', 'I will bring the games!'),
  ('Mallory', 'I will bring the fun!'),
  ('Nina', 'I will bring the laughter!'),
  ('Oscar', 'I will bring the joy!'),
  ('Peggy', 'I will bring the happiness!');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: connectionString,
    ssl: {
    rejectUnauthorized: false, // Render uses self-signed certs
  }
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

// postgresql://gobili:linuxislovedb@localhost:5432/messages