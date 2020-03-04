import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/api/v1/companies');
app.use('/api/v1/trucks');
app.use('/api/v1/gifs');
app.use('/api/v1/feed');

module.exports = app;
