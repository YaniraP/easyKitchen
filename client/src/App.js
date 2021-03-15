import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApiService from './ApiService';
import DishList from './components/DishList/dishList';
import MenuList from './components/MenuList/menuList';
import OrderList from './components/OrderList/orderList';
import DishForm from './components/DishForm/dishForm';
import MenuForm from './components/MenuForm/menuForm';
import OrderForm from './components/OrderForm/orderForm';
import MenuItemById from './components/MenuItemById/menuItemById';
import Home from './components/Home/Home';
import { CssBaseline, Grid } from '@material-ui/core';
import TopNav from './components/AppTools/TopNav/TopNav';
import BotNav from './components/AppTools/BotNav/BotNav';
import ClientBye from './components/ClientBye/ClientBye';
import MenuSaved from './components/MenuSaved/MenuSaved';
import GetStarted from './components/GetStarted/getStarted';
import DishSaved from './components/DishSaved/DishSaved';

function App() {
  const [dishes, setDishes] = useState([]);
  const [menus, setMenus] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [chosenMenu, setChosenMenu] = useState([]);
  const [tab, setTab] = useState(0);

  //DISHES
  useEffect(() => {
    ApiService.getDishes().then((data) => setDishes(data));
  }, []);

  const addNewDish = (body) => {
    ApiService.addDish(body).then((dish) =>
      setDishes((prevDishes) => [...prevDishes, dish])
    );
  };

  //MENUS
  useEffect(() => {
    ApiService.getMenus().then((data) => setMenus(data));
  }, []);

  const createNewMenu = (body) => {
    ApiService.createMenu(body).then((menu) =>
      setMenus((prevMenus) => [...prevMenus, menu])
    );
  };

  const deleteOneMenu = (id) => {
    ApiService.deleteMenu(id).then(
      setMenus(menus.filter((menu) => menu.id !== id))
    );
  };

  //ORDERS
  useEffect(() => {
    ApiService.getOrders().then((data) => setOrders(data));
  }, []);

  const createNewOrder = (body) => {
    ApiService.createOrder(body).then((order) =>
      setOrders((prevOrders) => {
        console.log('orders -> ', [...prevOrders, order]);
        return [...prevOrders, order];
      })
    );
  };

  //STYLE
  const containerStyle = {
    height: 'calc(100vh - 112px)',
    overFlow: 'auto',
    textAlign: 'center',
  };

  return (
    <Router>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');
      </style>
      <div className="App">
        <Grid container direction="column">
          <TopNav  />
          <div style={containerStyle} className="content">
            <Switch>
              <Route exact path="/menu">
                <MenuList menus={menus} />
              </Route>
              <Route exact path="/add_dish">
                <DishForm addNewDish={addNewDish} />
              </Route>
              <Route exact path="/dish">
                <DishList dishes={dishes} />
              </Route>
              <Route exact path="/create_menu">
                <MenuForm
                  dishes={dishes}
                  createNewMenu={createNewMenu}
                  selectedDishes={selectedDishes}
                  setSelectedDishes={setSelectedDishes}
                  menus={menus}
                />
              </Route>
              <Route exact path="/order">
                <OrderList orders={orders} chosenMenu={chosenMenu} />
              </Route>
              <Route exact path="/create_order">
                <OrderForm
                  createNewOrder={createNewOrder}
                  menus={menus}
                  dishes={dishes}
                  chosenMenu={chosenMenu}
                  setChosenMenu={setChosenMenu}
                />
              </Route>
              <Route exact path="/menu/:id">
                <MenuItemById menus={menus} />
              </Route>
              <Route exact path="/get_started" component={GetStarted}></Route>
              <Route exact path="/" component={Home} />
              <Route exact path="/dish_saved" component={DishSaved} />
              <Route exact path="/menu_saved" component={MenuSaved} />
              <Route exact path="/bye" component={ClientBye} />
            </Switch>
          </div>
          <BotNav value={tab} onChange={setTab} />
        </Grid>
        <CssBaseline />
      </div>
    </Router>
  );
}

export default App;
