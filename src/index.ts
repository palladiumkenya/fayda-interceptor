import express, { Request, Response } from 'express';
import { AppDataSource } from './dataSource';
import patientRoutes from './routes/patientRoute';
import consentRoute from './routes/consentRoute';
import bodyParser from 'body-parser';
import { Buffer } from 'buffer';

global.Buffer = global.Buffer || Buffer;

const app = express();
const port = process.env.PORT || 8888;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


AppDataSource.initialize().catch((error) => {
  console.error('Failed to connect to database:', error);
});

// fetch patient data endpoint
app.use('/api/v1/patient', patientRoutes);
app.use('/api/v1/consent', consentRoute);
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// error handler
app.use(function (err: Error, req: Request, res: Response) {
  const message = res.locals.message || err.message
  const status = res.locals.status  || 500
  console.log(`${message}: ${err.stack}`)
  res.status(status).json({
    status: status,
    message: message
  });
});