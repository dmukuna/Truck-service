import { Router } from 'express';

import { addServiceController, updateServiceController } from '../controllers/truck';

const router = Router();

router.post('/', addServiceController);
router.patch('/', updateServiceController);

export default router;
