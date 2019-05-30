import React  from 'react';

class ProductsCheckoutComponent extends React.Component{
  render(){
    return(
      <div className="productsCheckout">
          <div className="productsCheckout__actionStore">
            <button type="button">Empty Cart</button>
            <span>Total : $ 90.00 </span>
            <button type="button"> Place Order></button>
          </div>
          <div className="productsCheckout__list">

          </div>
          <div className="productsCheckout__actionFinish">
            <button type="submit">Finish Order</button>
          </div>
      </div>
    )
  }
}

export default ProductsCheckoutComponent
