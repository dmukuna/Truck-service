import db from './index';

const { query } = db;

const Truck = {
  findOneTruck(values) {
    const queryText = 'SELECT * FROM trucks WHERE id=$1';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  getAllTrucks(values) {
    const queryText = 'SELECT * FROM trucks WHERE company_id=$1';
    const rows = query(queryText, values)
      .then((res) => res.rows)
      .catch((err) => {
        throw err;
      });
    return rows;
  },

  saveTruck(values) {
    const queryText = `INSERT INTO
    trucks (id, model, registration, chassis_no, engine_no, mileage, company_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Truck;
