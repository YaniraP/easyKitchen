import {
  ModelDefined,
  Optional,
} from 'sequelize';

// Interface
export interface DishAttributes {
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;

  associate?: any;
}

// Some attributes are optional in `User.build` and `User.create` calls
export interface DishCreationAttributes extends Optional<DishAttributes, 'id'> {}

module.exports = (sequelize, DataTypes) => {
  const Dish: ModelDefined<
    DishAttributes,
    DishCreationAttributes
  > = sequelize.define(
    'Dish',
    {
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
    },
    {
      tableName: 'Dishes'
    }
  );
  
return Dish
};


