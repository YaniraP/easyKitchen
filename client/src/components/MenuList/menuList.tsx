
import MenuItemList from '../MenuItemList/menuItemList'
import * as React from 'react';
import { Menu } from 'interfaces/menu'

interface Props{
  menus: Menu[]
}

const MenuList: React.FC<Props> = ({ menus }) => {
  return (
    <div className='menuList'>
      {menus.map(menu =>
        <MenuItemList key={menu.id} menu={menu} />
      )}
    </div>
  )
}

export default MenuList;