import { configs as globalConfigs } from './shared/configs';
import { loginValidator } from './shared/controllers/validators/login.validator';
import { Product } from './shared/fake-data/products.fake';
import { ENUM_FAKE_MO_USER } from './shared/fake-data/user.fake';

const express = require('express');

// Create a new express application instance
export const app = express();
export const router = express.Router();

// 1st global middleware w/'use'
app.use('/api', globalConfigs, loginValidator);

// another middleware
app.get('/', (req, res, next) => {
  return res.status(201).json({
    data: null
  });
});

app.get('/api/products', (req, res, next) => {
  return res.status(201).json({
    data: new Product().products()
  });
});

app.get('/api/login', (req, res, next) => {

  return res.status(201).json({
    data: ENUM_FAKE_MO_USER
  });
});

