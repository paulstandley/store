import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";
// provider consumer 
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => { 
      return { products: tempProducts };
    });
  }

  handeldetail = () => {
    console.log('hello from handel detail');
  }

  addToCart = (id) => {
    console.log(`hello from add to item with id of ${id} cart`);
  }

  render() { 
    return ( 
      <ProductContext.Provider value={{
        ...this.state,
        handeldetail: this.handeldetail.handeldetail,
        addToCart: this.addToCart.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

 
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };