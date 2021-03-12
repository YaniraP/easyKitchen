import {Sequelize, DataTypes, ModelDefined} from 'sequelize';
import {DishAttributes, DishCreationAttributes} from './dish.model';
import {MenuAttributes, MenuCreationAttributes} from './menu.model';
import {OrderAttributes, OrderCreationAttributes} from './order.model';
import * as fs from 'fs';
import * as path from 'path';

const basename = path.basename(__filename)

interface db {
  sequelize?: any;
  Sequelize?: any;
  Dish?: ModelDefined<DishAttributes, DishCreationAttributes>;
  Menu?: ModelDefined<MenuAttributes, MenuCreationAttributes>;
  Order?: ModelDefined<OrderAttributes, OrderCreationAttributes>;
}
const db: db = {};



  const sequelize = new Sequelize('dbek', process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    //operatorsAliases: false // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  });


fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established succesfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

  // Dish Associations
db.Dish.belongsToMany(db.Menu, { through: 'DishesPerMenu' });
db.Dish.belongsToMany(db.Order, { through: 'DishesPerOrder' });

// Associations
db.Order.belongsToMany(db.Dish, { through: 'DishesPerOrder' });


  export default db;





