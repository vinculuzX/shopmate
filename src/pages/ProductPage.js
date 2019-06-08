import React from 'react';
import ProductDetailsComponent from '../components/ProductDetailsComponent'
class ProductPage extends React.Component{
  render(){
    const { productId } = this.props.match.params
    return(
      <div className="product">
        <ProductDetailsComponent productId={productId}/>
        <div className="product__reviews"></div>
      </div>
    )
  }
}

export default ProductPage
