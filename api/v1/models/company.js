import db from './index';

const { query } = db;

const Company = {
  findOneCompany(values) {
    const queryText = 'SELECT * FROM articles WHERE id=$1';
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },

  saveCompany(values) {
    const queryText = `INSERT INTO
      companies (id, company_name, email)
      VALUES ($1, $2, $3) RETURNING *`;
    const row = query(queryText, values)
      .then((res) => res.rows[0])
      .catch((err) => {
        throw err;
      });
    return row;
  },
};

export default Company;
