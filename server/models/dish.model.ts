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
interface DishCreationAttributes extends Optional<DishAttributes, 'id'> {}

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
      tableName: 'Dish'
    }
  );


  //TODO: Add associations
// Dish.associate = model => {
// Dish.belongsToMany(model.Menu, {through: 'DishesPerMenu'});
// Dish.belongsToMany(model.Order, {through: 'DishesPerOrder'})

return Dish
};


