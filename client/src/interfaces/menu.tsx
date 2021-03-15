import { Dish } from './dish';

export interface Menu{
  title: string,
  Dishes: Dish[],
  id: number,
}

export interface NewMenuRequest{
  title: string,
  DishId: number[]
}