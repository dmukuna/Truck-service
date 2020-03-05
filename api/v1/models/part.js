import db from './index';

const { query } = db;

const Truck = {
  findOnePart(values) {
    const queryText = 'SELECT * FROM parts WHERE id=$1';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  getAllParts(values) {
    const queryText = 'SELECT * FROM parts WHERE truck_id=$1';
    const rows = query(queryText, values)
      .then((res) => res.rows)
      .catch((err) => {
        throw err;
      });
    return rows;
  },

  savePart(values) {
    const queryText = `INSERT INTO
    parts (id, part_number, description, price, truck_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Truck;
