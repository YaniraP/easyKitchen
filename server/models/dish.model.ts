import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface DishAttributes {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface DishInstance
  extends Sequelize.Instance<DishAttributes>,
    DishAttributes {}

export const DishFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<DishInstance, DishAttributes> => {
  const attributes: SequelizeAttributes<DishAttributes> = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1024),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(1024),
    },
  };

  const Dish = sequelize.define<DishInstance, DishAttributes>(
    'Dish',
    attributes
  );

  return Dish;
};
