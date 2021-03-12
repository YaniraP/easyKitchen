import * as express from 'express';
import { router } from './router';
import * as cors from 'cors';
import * as morgan from 'morgan';

import db from './models/index';

// // Dish Associations
// db.Dish.belongsToMany(db.Menu, { through: 'DishesPerMenu' });
// db.Dish.belongsToMany(db.Order, { through: 'DishesPerOrder' });

// // Associations
// db.Order.belongsToMany(db.Dish, { through: 'DishesPerOrder' });

const app = express();
const PORT = 3001;

app.use(morgan('tiny'));
app.use(cors());

app.use(express.json());
app.use(router);

db.sequelize.sync().then(() => {
  console.log('db connected');
  app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT} 🚀`);
  });
});



