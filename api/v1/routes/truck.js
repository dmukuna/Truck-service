import { Router } from 'express';

import { addTruckController, getTrucksController } from '../controllers/truck';
import { addPartController, getPartsController } from '../controllers/part';
import { addLogController, getLogsController } from '../controllers/log';

const router = Router();

router.post('/', addTruckController);
router.get('/', getTrucksController);
router.post('/truckId/parts', addPartController);
router.get('/truckId/parts', getPartsController);
router.post('/truckId/logs', addLogController);
router.get('/truckId/logs', getLogsController);

export default router;
