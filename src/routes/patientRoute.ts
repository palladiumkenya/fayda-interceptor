import express from 'express';
import { getPatient, createPatient } from '../controller/patientController';

const router = express.Router();

router.post('/seed', createPatient);

router.get('/', getPatient);

export default router;