import React from 'react'
import ProductsCheckoutComponent from '../components/ProductsCheckoutComponent.js'

class CheckoutPage extends React.Component{
  render(){
    return(
      <div className="checkout">
        <ProductsCheckoutComponent/>
      </div>
    )
  }
}

export default CheckoutPage
