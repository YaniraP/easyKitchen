// const express = require('express');
// const router = require('./router');
// const cors = require('cors')
// const morgan = require('morgan');
const db = require('./models');

import * as express from 'express';
import {router} from './router';
import * as cors from 'cors';
import * as morgan from 'morgan';


const app = express();
const PORT = 3001;

app.use(morgan('tiny'))
app.use(cors())

app.use(express.json());
app.use(router);

db.sequelize.sync()
  .then(() => {
    console.log('db connected');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT} 🚀`);
    });
  })



