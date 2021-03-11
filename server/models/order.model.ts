// OLD CODE =============================================

// module.exports = (sequelize, DataTypes) => {

//   const  Order = sequelize.define('Order', {
//     clientName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     clientAddress: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     clientPhone: {
//       type: DataTypes.INTEGER(15)
//     },
//     comments: {
//       type: DataTypes.STRING(500)
//     }
//   });

//   Order.associate = model => {
//     Order.belongsToMany(model.Dish, {through: 'DishesPerOrder'});
//   };

//   return Order;
// }

// START REFACTOR ======================================

import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface OrderAttributes {
  id?: number;
  clientName: string;
  clientAddress: string;
  clientPhone: number;
  comments: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderInstance
  extends Sequelize.Instance<OrderAttributes>,
    OrderAttributes {}

export const OrderFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<OrderInstance, OrderAttributes> => {
  const attributes: SequelizeAttributes<OrderAttributes> = {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientPhone: {
      type: DataTypes.INTEGER(15),
    },
    comments: {
      type: DataTypes.STRING(500),
    },
  };

  const Order = sequelize.define<OrderInstance, OrderAttributes>(
    'Order',
    attributes
  );

  return Order;
};
