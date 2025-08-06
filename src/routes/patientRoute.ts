import express from 'express';
import { getPatient, createPatient, deletePatient, getPatients } from '../controller/patientController';

const router = express.Router();

router.post('/seed', createPatient);

router.get('/', getPatient);
router.get('/list', getPatients);
router.delete('/:nationalId', deletePatient);

export default router;