import db from './index';

const { query } = db;

const Log = {
  findOnePart(values) {
    const queryText = 'SELECT * FROM logs WHERE id=$1';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  savePart(values) {
    const queryText = `INSERT INTO
    logs (id, driver_name, driver_number, company_id, truck_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Log;
