import { DataTypes, ModelDefined, Optional, Sequelize } from 'sequelize';

// Interface
export interface MenuAttributes {
  id?: number;
  title: string;
  bear: symbol;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface MenuCreationAttributes extends Optional<MenuAttributes, 'id'> {}

module.exports = (sequelize, DataTypes) => {
  const Menu: ModelDefined<
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
      tableName: 'Menu',
    }
  );

  //TODO: Add associations

  return Menu;
};
