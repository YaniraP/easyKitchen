import { Dish } from './dish';

export interface Order{
  Dishes?: Dish[] | undefined;
  clientName: string,
  clientAddress: string,
  clientPhone: number,
  comments: string,
  DishId?: number[],
  id?: number
};