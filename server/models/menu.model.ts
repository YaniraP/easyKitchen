// OLD CODE =======================================

//  (sequelize, DataTypes) => {
//   const Menu = sequelize.define('Menu', {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });

//   Menu.associate = model => {
//     Menu.belongsToMany(model.Dish, { through: 'DishesPerMenu' })
//   }
//   return Menu;
// }

// START REFACTOR ==================================

import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface MenuAttributes {
  id?: number;
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface MenuInstance
  extends Sequelize.Instance<MenuAttributes>,
    MenuAttributes {}

export const MenuFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<MenuInstance, MenuAttributes> => {
  const attributes: SequelizeAttributes<MenuAttributes> = {
    title: {
      type: DataTypes.STRING,
    },
  };

  const Menu = sequelize.define<MenuInstance, MenuAttributes>(
    'Menu',
    attributes
  );

  return Menu;
};
