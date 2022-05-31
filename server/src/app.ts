import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
// import route from './RouteIndex/routeIndex.js';

dotenv.config();

const app: Express = express();
// const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

// app.use('/', route);

module.exports = app;