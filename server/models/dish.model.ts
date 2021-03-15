import { DataTypes, Model, Sequelize, BuildOptions } from 'sequelize';

// Interface
export interface DishAttributes {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface DishModel extends Model<DishAttributes>, DishAttributes {}

type DishStatic = typeof Model & {
  new (values?: DishAttributes, options?: BuildOptions): DishModel;
};

export function DishFactory(sequelize: Sequelize): DishStatic {
  return <DishStatic>sequelize.define('Dishes', {
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
  });
}
