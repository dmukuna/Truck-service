import uuidv1 from 'uuid/v1';
import srvc from '../models/service';
import prt from '../models/part';

const { saveService, updateService, getAllServices } = srvc;
const { findOnePart } = prt;

const addServiceController = async (req, res, next) => {
  const { quantity } = req.body;
  const { partId, logId } = req.params;
  const id = uuidv1();

  try {
    const partRow = await findOnePart([partId]);
    const { price } = partRow;
    const taxedPrice = parseInt(price, 10) * (100 / 84);
    const total = taxedPrice * parseInt(quantity, 10);
    const status = false;

    const values = [id, status, quantity, total, partId, logId];

    await saveService(values);

    res.status(201).json({
      status: 'success',
      data: {
        id,
        message: 'Service successfully added',
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

const updateServiceController = async (req, res, next) => {
  const { partId, logId } = req.params;

  try {
    const status = true;
    const values = [status, partId, logId];

    await updateService(values);

    res.status(201).json({
      status: 'success',
      data: {
        message: 'Service successfully updated',
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

const getServicesController = async (req, res, next) => {
  const { partId, logId } = req.params;

  try {
    const values = [partId, logId];
    const rows = await getAllServices(values);
    const servicesArr = [];

    rows.forEach((row) => {
      const {
        id, status, quantity, total, part_id, log_id,
      } = row;

      const obj = {
        id, status, quantity, total, part_id, log_id,
      };
      servicesArr.push(obj);
    });

    res.status(200).json({
      status: 'success',
      data: servicesArr,
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
  addServiceController,
  getServicesController,
  updateServiceController,
};
