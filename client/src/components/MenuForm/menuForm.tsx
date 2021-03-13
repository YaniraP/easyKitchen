import './menuForm.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { RouteComponentProps, useParams } from 'react-router';
import { withRouter } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Dish } from 'interfaces/dish';
import { Menu } from 'interfaces/menu';

//TODO UPTADE => navigate to menu item by Id

interface Props{
  dishes: Dish[],
  createNewMenu: (reqObj: {title: string, DishId: number[]}) => void,
  selectedDishes: Dish[],
  setSelectedDishes: (dishes: Dish[]) => void
}


const MenuForm: React.FC<Props & RouteComponentProps> = ({ dishes, createNewMenu, selectedDishes, setSelectedDishes }) => {

  const { register, handleSubmit, reset } = useForm();
  let [noSelectionError, setNoSelectionError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: Dish) => {
    if (selectedDishes.length === 0){
      setNoSelectionError(true);
    } else {
      if(noSelectionError) setNoSelectionError(false);
      const parsedData = {
        title: data.title,
        DishId: selectedDishes.map(dish => dish.id)
      }
      createNewMenu(parsedData);
      setSelectedDishes([]);
      reset();
      history.push('/menu_saved');
    }
  }

  const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.checked) {
      const checkedDish = dishes.filter((dish) => dish.id === parseInt(event.target.value))[0];
      setSelectedDishes([...selectedDishes, checkedDish]);
    } else {
      setSelectedDishes(selectedDishes.filter(dish => dish.id !== parseInt(event.target.value)));
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="menu-title">
        <input
          className="menuTitle_field"
          type="text"
          placeholder="Insert Menu name"
          name="title"
          ref={register({ required: "Title required" })}
        />
      </div>
      <div className="menu-item">
        {dishes?.map((dish) =>
          <div className="dish" key={dish.id}>
            <h3 >{dish.title}</h3>
            <p >{dish.description}</p>
            <p >€ {dish.price}</p>
            <input type="checkbox"
              onChange={handleCheckBox}
              value={dish.id}
              name={dish.title}
              ref={register}
              className="checkbox"
            />
          </div>
        )}
      </div>
      {noSelectionError && <p>Please select at least one dish to create the menu.</p> }
      <input type="submit" className="onSubmit" />
    </form>
  );
}

export default withRouter(MenuForm);