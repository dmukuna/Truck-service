import { Router } from 'express';

import { addTruckController } from '../controllers/truck';
import { addPartController } from '../controllers/part';
import { addLogController } from '../controllers/log';

const router = Router();

router.post('/', addTruckController);
router.post('/truckId/parts', addPartController);
router.post('/truckId/logs', addLogController);

export default router;
