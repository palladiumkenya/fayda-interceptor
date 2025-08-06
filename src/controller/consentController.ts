import { Request, Response, NextFunction } from 'express';
import { Patient } from '../entity/Patient';
import { AppDataSource } from '../dataSource';

const patientRepo = AppDataSource.getRepository(Patient);

export async function requestOtp(req: Request, res: Response, next: NextFunction) {
    console.log('Request OTP payload', req.body)
    try {
        res.json({
           status: 'success',
           message: 'OTP sent to client phone number'
           });
    } catch(error) {
        next(error);
    }
}

export async function validateOtp(req: Request, res: Response, next: NextFunction) {
    console.log('Validate OTP payload', req.body);
    const { otp } = req.body;
    try {
        const patient = await patientRepo.findOneBy({ otp });
        if (!patient) {
          res.status(404).json({ message: 'OTP Not found' });
        } else {
          res.json({
            status: 'success',
            message: 'OTP validated successfully',
          });
        }
    } catch (error) {
        next(error);
    }
}
