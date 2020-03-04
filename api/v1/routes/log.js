import { Router } from 'express';

import partRoutes from './part';

const router = Router();

router.use('/logId/parts', partRoutes);

export default router;
