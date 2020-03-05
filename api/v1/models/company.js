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

  getAllCompanies() {
    const queryText = 'SELECT * FROM companies';
    const rows = query(queryText)
      .then((res) => res.rows)
      .catch((err) => {
        throw err;
      });
    return rows;
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
