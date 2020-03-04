import { Router } from 'express';

import { addCompanyController } from '../controllers/company';
import truckRoutes from './truck';

const router = Router();

router.post('/', addCompanyController);
router.use('/companyId/trucks', truckRoutes);


export default router;
