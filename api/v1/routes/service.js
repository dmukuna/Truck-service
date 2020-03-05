import { Router } from 'express';

import { addServiceController, updateServiceController, getServicesController } from '../controllers/service';

const router = Router();

router.post('/', addServiceController);
router.get('/', getServicesController);
router.patch('/', updateServiceController);

export default router;
