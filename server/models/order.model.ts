import { ModelDefined, Optional } from 'sequelize';

// Interface
export interface OrderAttributes {
  id?: number;
  clientName: string;
  clientAddress: string;
  clientPhone: number;
  comments: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
export interface OrderCreationAttributes extends Optional<OrderAttributes, 'id'> {}

module.exports = (sequelize, DataTypes) => {
  const Order: ModelDefined<
    OrderAttributes,
    OrderCreationAttributes
  > = sequelize.define(
    'Order',
    {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientPhone: {
      type: DataTypes.INTEGER(15)
    },
    comments: {
      type: DataTypes.STRING(500)
    }
  },
    {
      tableName: 'Orders',
    }
  );

  //TODO: Add associations

  return Order;
};
