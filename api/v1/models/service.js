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

  saveService(values) {
    const queryText = `INSERT INTO
    services (id, status, quantity, part_id, log_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  updateService(values) {
    const queryText = 'UPDATE services SET status=$1 WHERE ID=$2 RETURNING *';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Service;
