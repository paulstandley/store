import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/Cart';
import Details from './components/Details';
import { Switch , Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>  
    );
  }
}

export default App;
/* https://www.youtube.com/watch?v=wPQ1-33teR4&index=4&t=13117s&list=LLsa0LzMzgiJpYpovYxBKGCA 3:08*/