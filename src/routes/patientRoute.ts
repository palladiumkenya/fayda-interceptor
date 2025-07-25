import express from 'express';
import { getPatient, createPatient, deletePatient } from '../controller/patientController';

const router = express.Router();

router.post('/seed', createPatient);

router.get('/', getPatient);
router.delete('/:nationalId', deletePatient);

export default router;