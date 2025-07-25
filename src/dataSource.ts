import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Patient } from './entity/Patient';
import appProperties from './appProperties';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: appProperties.databaseHost,
  port: 5432,
  username: appProperties.databaseUsername,
  password: appProperties.databasePassword,
  database: appProperties.databaseName,
  synchronize: false,
  logging: false,
  entities: [Patient],
});