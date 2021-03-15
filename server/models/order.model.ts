import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

// Interfaces
export interface OrderAttributes {
  id?: number;
  clientName: string;
  clientAddress: string;
  clientPhone: number;
  comments: string;
}

export interface OrderModel extends Model<OrderAttributes> {
  getDishes: any;
  setDishes: any;
}

type OrderStatic = typeof Model & {
  new (values?: OrderAttributes, options?: BuildOptions): OrderModel;
};

export function OrderFactory(sequelize: Sequelize): OrderStatic {
  return <OrderStatic>sequelize.define('Orders', {
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientPhone: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING(500),
    },
  });
}
