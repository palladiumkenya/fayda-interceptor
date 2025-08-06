import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../dataSource";
import { Patient } from "../entity/Patient";
import { patientMapper, bundleWrapper } from "../entity/patientMapper";
import { forwardPatientLookup } from '../service/openfnRelay';
import appProperties from '../appProperties';

const patientRepo = AppDataSource.getRepository(Patient);

function wait(ms:number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getPatients(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const page = 1;
  const pageSize = 10;
  try {
    const [results, total] = await patientRepo.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
    console.log(`Found ${total} patients`);
    if (results) {
      const formatedPatients = results.map(result => patientMapper(result));
      res.status(200).json(bundleWrapper(formatedPatients, total));
    }
  } catch (error) {
     next(error);
  }
  
}
export async function getPatient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const identifierNumber = req.query.identifierNumber as string;
  try {
    const host = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const origin = req.get('origin');
    const headers = req.headers;

    console.log('host', host);
    console.log('origin', origin);
    console.log('headers', headers);
    const patient = await patientRepo.findOneBy({ nationalId: identifierNumber });
    if (!patient) {
      res.status(404).json({ message: "Not found" });
    } else {
      const patientResource = patientMapper(patient);
      const resources = bundleWrapper([patientResource], 1);

      res.status(200).json(resources);
          // relay patient info to Openfn
          const delay = Number(appProperties.openFnRelayDelay);
          console.log(`waiting for ${delay}ms.....`);
          await wait(delay);
            const response = await forwardPatientLookup({
            identifierType: 'National ID',
            identifierNumber: patient.nationalId,
            patient: patientResource
          });
          console.log('delayed openfn response', response);
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
    const existingPatient = await patientRepo.findOneBy({ nationalId });
    if(!existingPatient) {
    const shaNumber = `SHA${Math.floor(10000000 + Math.random() * 90000000)}-4`;
    const uuid = crypto.randomUUID();
    const householdNumber = `HH${Math.floor(1e9 + Math.random() * 9e9)}`;
    const walletId = Math.floor(1e12 + Math.random() * 9e12).toString();
    const crId = generateCode();

    // const createdAt = new Date().toISOString();
    const patient = patientRepo.create({ nationalId, uuid, shaNumber, householdNumber, walletId, given, family,  gender, birthDate, phoneNumber, county, subCounty, ward, village, otp, crId });
    await patientRepo.save(patient);
    res.status(201).json(patient);
    } else {
      console.log(`Found existing patient with ID: ${nationalId}`);
      res.status(201).json(existingPatient);
    }
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
