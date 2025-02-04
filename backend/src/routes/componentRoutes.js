import express from 'express';
import { getComponentDetails } from '../controllers/componentController.js';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), getComponentDetails);

export default router;
