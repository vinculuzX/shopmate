import React  from 'react';
import {ProductsCheckout} from '../models/ProductsCheckoutModel'

class TableProductsList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const productsListCheckout = this.props.tableProductsList
    .map((productsList)=>{
      return(
            <tr>
              <td>{productsList.name}</td>
              <td>{productsList.quantity}</td>
              <td>{productsList.price}</td>
              <td>{productsList.subtotal}</td>
            </tr>
      )
    })
    return(
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productsListCheckout}
        </tbody>
    </table>
    )
  }
}
class ProductsCheckoutComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total:0,
      productsList:ProductsCheckout
    }
  }
  render(){
    return(
      <div className="productsCheckout">
          <div className="productsCheckout__actionStore">
            <button type="button">Empty Cart</button>
            <span>Total : $ {this.state.total}</span>
            <button type="button"> Place Order></button>
          </div>
          <div className="productsCheckout__list">
            <TableProductsList tableProductsList={this.state.productsList}/>
          </div>
          <div className="productsCheckout__actionFinish">
            <button type="submit">Finish Order</button>
          </div>
      </div>
    )
  }
}

export default ProductsCheckoutComponent
