import './menuItemList.css';

const MenuItemList = ({ menu }) => {
  return (
    <div className='menuItemList'>
      <h3>{menu.title}</h3>
      {menu.Dishes && menu.Dishes.map(dish =>
        <p key={dish.id}>{dish.title}</p>)}
    </div>
  )
}

export default MenuItemList;