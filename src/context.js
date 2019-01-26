import React, { Component } from 'react';
import { storeProducts, detailProduct } from "./data";
// provider consumer 
const ProductContext = React.createContext();

class ProductProvider extends Component {

  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }

  handeldetail = () => {
    console.log('hello from handel detail');
  }

  addToCart = () => {
    console.log('hello from add to cart');
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