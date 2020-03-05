import uuidv1 from 'uuid/v1';
import trck from '../models/truck';

const { getAllTrucks, saveTruck } = trck;

const addTruckController = async (req, res, next) => {
  const {
    model, registration, chassisNo, engineNo, mileage,
  } = req.body;
  const { companyId } = req.params;
  const id = uuidv1();

  const values = [id, model, registration, chassisNo, engineNo, mileage, companyId];

  try {
    await saveTruck(values);
    res.status(201).json({
      status: 'success',
      data: {
        id,
        message: 'Truck successfully added',
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

const getTrucksController = async (req, res, next) => {
  try {
    const trucksArr = [];
    const { companyId } = req.params;
    const rows = await getAllTrucks([companyId]);

    rows.forEach((row) => {
      const {
        id, model, registration, chassis_no, engine_no, mileage, company_id,
      } = row;
      const values = {
        id, model, registration, chassis_no, engine_no, mileage, company_id,
      };

      trucksArr.push(values);
    });

    res.status(200).json({
      status: 'success',
      data: trucksArr,
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
  addTruckController,
  getTrucksController,
};
