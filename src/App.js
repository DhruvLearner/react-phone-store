import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import ProductList from './components/productlist';
import Product from './components/product';
import Details from './components/details';
import Default from './components/default';
import Cart from './components/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Modal from './components/modal';
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    )
  }
}
export default App;
