import { Router } from 'express';
import * as contactSubmissionController from '../controllers/contact';

const router = Router();

router.post('/', contactSubmissionController.createOne);

export default router;
