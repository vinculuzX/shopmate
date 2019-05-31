import React from 'react'
import {ProductDetails} from '../models/ProductDetailsModel';

class ProductDetailsComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productDetails:ProductDetails
    }
  }
  render(){
    return(
      <div className="productDetails">
        <div className="productDetails__images">

        </div>
        <div className="productDetails__info">

        </div>
      </div>
    )
  }
}

export default ProductDetailsComponent
