import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getShippingMethods } from "./redux/orderReducer/Actions";
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateOrder from './components/CreateOrder';
import MyOrders from './components/MyOrders';
import Order from './components/Order';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("/api/user/shippingMethods")
      .then(response => {
        dispatch(getShippingMethods(response.data));
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <HashRouter basename='/' >
      <Route path="/" render={() => <Navbar />} />
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/createOrder" render={() => <CreateOrder />} />
      <Route exact path="/myOrders" render={() => <MyOrders />} />
      <Route exact path="/order/:id" render={() => <Order />} />
    </HashRouter>
  );
}

export default App;
