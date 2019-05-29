import React , {Component} from 'react';
import  ProductDetails  from '../components';

class ProductPage extends Component{
  constructor(){

  }

  render(){
    return(){
      <div className="product">
        <ProductDetails/>
        <div className="product__reviews"></div>
      </div>
    }
  }

}

export default ProductPage
