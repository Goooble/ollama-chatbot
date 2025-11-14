import { Pool } from 'pg';
import 'dotenv/config';
import process from 'process'
// Again, this should be read from an environment variable
const connection = process.env.DATABASE_URL
console.log("Connecting to DB:", process.env.DATABASE_URL);

export default new Pool({
  connectionString: connection,
});
