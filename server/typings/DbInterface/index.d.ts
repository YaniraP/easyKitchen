import * as Sequelize from "sequelize";
import {DishAttributes, DishInstance } from "../../models/dish.model"
import {MenuAttributes, MenuInstance } from "../../models/menu.model"
import {OrderAttributes, OrderInstance } from "../../models/order.model"

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Dish: Sequelize.Model<DishInstance, DishAttributes>;
  Menu: Sequelize.Model<MenuInstance, MenuAttributes>;
  Order: Sequelize.Model<OrderInstance, OrderAttributes>;
}