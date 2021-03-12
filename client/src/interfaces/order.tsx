import { Dish } from './dish';

export interface Order{
  Dishes?: Dish[];
  clientName: string,
  clientAddress: string,
  clientPhone: number,
  comments: string,
  DishId?: number[],
  id?: number
};