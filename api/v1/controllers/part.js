import uuidv1 from 'uuid/v1';
import prt from '../models/part';

const { getAllParts, savePart } = prt;

const addPartController = async (req, res, next) => {
  const { partNumber, description, price } = req.body;
  const { truckId } = req.params;
  const id = uuidv1();

  const values = [id, partNumber, description, price, truckId];

  try {
    await savePart(values);
    res.status(201).json({
      status: 'success',
      data: {
        id,
        message: 'Part successfully added',
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

const getPartsController = async (req, res, next) => {
  try {
    const partsArr = [];
    const { truckId } = req.params;
    const rows = await getAllParts([truckId]);

    rows.forEach((row) => {
      const {
        id, partNumber, description, price, truck_id,
      } = row;
      const values = {
        id, partNumber, description, price, truck_id,
      };

      partsArr.push(values);
    });

    res.status(200).json({
      status: 'success',
      data: partsArr,
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
  addPartController,
  getPartsController,
};
