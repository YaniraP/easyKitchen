import {  Model, Optional } from 'sequelize';

// Interface
export interface MenuAttributes {
  id?: number;
  title: string;
  addDish: (() => any);
}



// Some attributes are optional in `User.build` and `User.create` calls
export interface MenuCreationAttributes extends Optional<MenuAttributes, 'id' | 'addDish'> {}

// interface MenuInstance extends Model<MenuAttributes>,
// MenuAttributes{}

module.exports = (sequelize, DataTypes) => {
  const Menu: Model<
    MenuAttributes,
    MenuCreationAttributes
  > = sequelize.define(
    'Menu',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'Menus',
    }
  );

  return Menu;
};
