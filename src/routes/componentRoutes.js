import express from 'express';
import { getComponentDetails } from '../controllers/componentController.js';

const router = express.Router();

router.post('/', (req, res, next) => {
	const multer = require('multer');
	const upload = multer({ dest: 'uploads/' });
	upload.single('file')(req, res, next);
}, getComponentDetails);

export default router;
