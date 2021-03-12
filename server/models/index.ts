import {Sequelize, DataTypes} from 'sequelize';
import * as fs from 'fs';
import * as path from 'path';

const basename = path.basename(__filename)

interface db {
  sequelize?: any;
  Sequelize?: any;
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

  module.exports = db;





