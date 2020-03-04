import { Router } from 'express';

import serviceRoutes from './service';

const router = Router();

router.use('/partId/services', serviceRoutes);

export default router;
