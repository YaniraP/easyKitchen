import './orderForm.css';
import { useForm } from "react-hook-form";
import MenuItemById from '../MenuItemById/menuItemById';


//TODO ADD MENU WITH DISHES

function OrderForm ({ createNewOrder, menus }) {
  // eslint-disable-next-line 
  const { register, handleSubmit, errors, reset } = useForm();
  // eslint-disable-next-line 
  const onSubmit = data => {
    console.log(data)
    createNewOrder(data);
    reset()
  }

  const selectedMenu = () => {
    if (menus && menus.length > 0) {
      return menus.find(menu => parseInt(menu.id) === 15);
    }
  }
  let menu = selectedMenu();

  return (
    <form
      className="order-form"
      onSubmit={handleSubmit(onSubmit)}>
      <h2>Make your order</h2>

      <label>Name</label>
      <input
        className="clientName"
        type="text"
        placeholder="Name"
        name="clientName"
        ref={register({ required: "Name required" })}
      />
      <label>Address</label>
      <input
        className="clientAddress"
        type="text"
        placeholder="Address"
        name="clientAddress"
        ref={register({ required: "Address required" })}
      />
      <label>Phone</label>
      <input
        className="phone"
        type="number"
        placeholder="Phone"
        name="phone"
        ref={register()}
      />
      <label>Comments</label>
      <input
        className="comments"
        type="text"
        placeholder="Comments"
        name="comments"
        ref={register()}
      />
      <input
        className="add-order-btn"
        type="submit"
      />
      {errors.title && <p>{errors.title.message}</p>}
      {errors.description && <p>{errors.description.message}</p>}
      {errors.price && <p>{errors.price.message}</p>}
    </form>
  );

}

export default OrderForm;