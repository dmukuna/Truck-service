import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const conn = { connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}` };

const pool = new Pool(conn);

pool.on('error', (err, client) => {
  client.release();
  // eslint-disable-next-line no-console
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;
