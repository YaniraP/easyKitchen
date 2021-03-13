import { DataTypes, Model, Sequelize, BuildOptions, BelongsToManyAddAssociationMixin } from 'sequelize';

// Interface
export interface MenuAttributes {
  id?: number;
  title: string;
  addDish?: BelongsToManyAddAssociationMixin<MenuModel, any>;
}

interface MenuModel extends Model<MenuAttributes>, MenuAttributes {
  //addDish?: BelongsToManyAddAssociationMixin<MenuModel, any>;
}

type MenuStatic = typeof Model & {
  new (values?: MenuAttributes, options?: BuildOptions): MenuModel;
};

export function MenuFactory(sequelize: Sequelize): MenuStatic {
  return <MenuStatic>sequelize.define(
    'Menus',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
}


