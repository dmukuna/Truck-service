import uuidv1 from 'uuid/v1';
import lg from '../models/log';

const { getAllLogs, saveLog } = lg;

const addLogController = async (req, res, next) => {
  const { driverName, driverNumber } = req.body;
  const { companyId, truckId } = req.params;
  const id = uuidv1();

  const values = [id, driverName, driverNumber, companyId, truckId];

  try {
    await saveLog(values);
    res.status(201).json({
      status: 'success',
      data: {
        id,
        message: 'Truck logged successfully',
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

const getLogsController = async (req, res, next) => {
  try {
    const logsArr = [];
    const { companyId, truckId } = req.params;

    const rows = await getAllLogs([truckId, companyId]);

    rows.forEach((row) => {
      const {
        id, driverName, driverNumber, company_id, truck_id,
      } = row;
      const values = {
        id, driverName, driverNumber, company_id, truck_id,
      };

      logsArr.push(values);
    });

    res.status(200).json({
      status: 'success',
      data: logsArr,
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
  addLogController,
  getLogsController,
};