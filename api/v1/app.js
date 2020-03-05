import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import companyRoutes from './routes/company';
import logRoutes from './routes/log';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api/v1/companies', companyRoutes);
app.use('/api/v1/logs', logRoutes);

module.exports = app;
