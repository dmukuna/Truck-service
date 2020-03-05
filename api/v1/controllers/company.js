import uuidv1 from 'uuid/v1';
import cmp from '../models/company';

const { saveCompany, getAllCompanies } = cmp;

const addCompanyController = async (req, res, next) => {
  const { companyName, email } = req.body;
  const id = uuidv1();

  const values = [id, companyName, email];

  try {
    await saveCompany(values);
    res.status(201).json({
      status: 'success',
      data: {
        id,
        message: 'company successfully added',
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message,
      },
    });
  }
};

const getCompaniesController = async (req, res, next) => {
  try {
    const companiesArr = [];
    const rows = await getAllCompanies();

    rows.forEach((row) => {
      const { id, company_name, email } = row;
      const values = { id, company_name, email };

      companiesArr.push(values);
    });
    res.status(200).json({
      status: 'success',
      data: companiesArr,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      data: {
        message: err.message,
      },
    });
  }
};

export {
  addCompanyController,
  getCompaniesController,
};
