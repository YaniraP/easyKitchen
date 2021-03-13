import DishItem from '../DishItem/dishItem'
import * as React from 'react';
import { Dish } from 'interfaces/dish';

interface Props{
  dishes: Dish[]
};

const DishList: React.FC<Props> = ({ dishes }) => {
  return (
    <div className='dishList'>
      {dishes.map(dish =>
        <DishItem key={dish.id} dish={dish} />
      )}
    </div>
  )
}

export default DishList;

