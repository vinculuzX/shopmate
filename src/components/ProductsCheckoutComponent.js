import React  from 'react';
import {ProductsCheckout , ProductsTotal} from '../models/ProductsCheckoutModel'
import '../styles/scss/components/ProductsCheckoutComponent.scss';
class TableProductsList extends React.Component{
  render(){
    const productsListCheckout = this.props.tableProductsList
    .map((productsList,index)=>{
      return(
            <tr key={index}>
              <td></td>
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
  componentDidMount(){
    this.setState({
      total:ProductsTotal
    })
  }
  render(){
    return(
      <div className="productsCheckout">
          <br/><br/><br/>
          <div className="productsCheckout__actionStore">
            <button className="white"  type="button">Empty Cart</button>
            <span>Total :  &#163; <b>{this.state.total}</b></span>
            <button className="pink" type="button"> Place Order</button>
          </div>
          <div className="productsCheckout__list">
            <TableProductsList tableProductsList={this.state.productsList}/>
          </div>
          <div className="productsCheckout__actionFinish">
            <button className="pink" type="submit">Finish Order</button>
          </div>
      </div>
    )
  }
}

export default ProductsCheckoutComponent
