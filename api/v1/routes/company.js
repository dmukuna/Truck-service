import { Router } from 'express';

import { addCompanyController, getCompaniesController } from '../controllers/company';
import truckRoutes from './truck';

const router = Router();

router.post('/', addCompanyController);
router.get('/', getCompaniesController);
router.use('/companyId/trucks', truckRoutes);

export default router;
