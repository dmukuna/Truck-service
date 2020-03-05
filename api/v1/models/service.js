import db from './index';

const { query } = db;

const Service = {
  findOneService(values) {
    const queryText = 'SELECT * FROM services WHERE id=$1';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  getAllServices(values) {
    const queryText = 'SELECT * FROM services WHERE part_id=$1 AND log_id=$2';
    const rows = query(queryText, values)
      .then((res) => res.rows)
      .catch((err) => {
        throw err;
      });
    return rows;
  },

  updateService(values) {
    const queryText = 'UPDATE services SET status=$1 WHERE part_id=$2 AND log_id=$3 RETURNING *';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  saveService(values) {
    const queryText = `INSERT INTO
    services (id, status, quantity, total, part_id, log_id)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Service;
