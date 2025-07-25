import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../dataSource";
import { Patient } from "../entity/Patient";
import { patientMapper } from "../entity/patientMapper";

const patientRepo = AppDataSource.getRepository(Patient);

export async function getPatient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const identifierNumber = req.query.identifierNumber as string;
  try {
    const patient = await patientRepo.findOneBy({ nationalId: identifierNumber });
    if (!patient) {
      res.status(404).json({ message: "Not found" });
    } else {
      res.status(200).json(patientMapper(patient));
    }
    
  } catch (error) {
    next(error);
  }
}
function generateCode(length = 10) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${code}-3`;
}
export async function createPatient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { nationalId, given, family,  gender, birthDate, phoneNumber, county, subCounty, ward, village, otp } = req.body;
    const shaNumber = `SHA${Math.floor(10000000 + Math.random() * 90000000)}-4`;
    const uuid = crypto.randomUUID();
    const householdNumber = `HH${Math.floor(1e9 + Math.random() * 9e9)}`;
    const walletId = Math.floor(1e12 + Math.random() * 9e12).toString();
    const crId = generateCode();

    // const createdAt = new Date().toISOString();
    const patient = patientRepo.create({ nationalId, uuid, shaNumber, householdNumber, walletId, given, family,  gender, birthDate, phoneNumber, county, subCounty, ward, village, otp, crId });
    await patientRepo.save(patient);
    res.status(201).json(patient);
  } catch (error) {
    next(error);
  }
}

export async function deletePatient(
  req: Request,
  res: Response,
  next: NextFunction) {
    const nationalId = req.params.nationalId
    try {
      await patientRepo.delete({ nationalId: nationalId });
      res.status(200).json({message: `Patient with national ID ${nationalId} has been deleted`});
    } catch(error) {
      next(error);
    }
}
