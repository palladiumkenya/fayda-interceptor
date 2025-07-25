import express from 'express';
import { requestOtp, validateOtp  } from '../controller/consentController';

const router = express.Router();

router.post('/validate-otp', validateOtp);
router.post('/request', requestOtp);


export default router;