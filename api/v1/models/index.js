import pool from '../config/dbConfig';

export default {
  async query(text, params) {
    await pool.connect();
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
