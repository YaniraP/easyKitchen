import { Sequelize } from 'sequelize';
import { DishFactory } from './dish.model';
import { MenuFactory } from './menu.model';
import { OrderFactory } from './order.model';
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = require(__dirname + '/../config/config.ts')[env];


export const db = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    pool: {
      min: 0,
      max: 5,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// Factories
const Dish = DishFactory(db);
const Menu = MenuFactory(db);
const Order = OrderFactory(db);



// Associations
Dish.belongsToMany(Menu, { through: 'DishesPerMenu', foreignKey: 'DishId' });
Menu.belongsToMany(Order, { through: 'DishesPerOrder' });
Order.belongsToMany(Dish, { through: 'DishesPerOrder' });

export { Dish, Order, Menu };
