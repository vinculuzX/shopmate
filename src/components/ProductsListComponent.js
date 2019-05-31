import React  from 'react';
import {ProductsList} from '../models/ProductsListModel'

class ProductsListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product:[{
        name:"",
        description:"",
        price:0,
        discounted_price:0
      }]
    }
  }
  componentDidMount(){
    this.setState({
      product:ProductsList
    })
  }

  handleAddtoCart = () => {

  }
  render(){
    const productsList  = this.state.product
    .map((product) => {
      return(
        <div key={product.product_id} className="productsList">
            <div class="productsList__data">
              <h4>{product.name}</h4>
              <img src={product.thumbnail} alt="image"/>
            </div>
            <div class="productsList__price">
              <span>{product.price}</span>
              <button onClick={(product) => this.handleAddToCart(product)} type="button">Add Cart</button>
            </div>
            <div class="productsList__description">
              {product.description}
            </div>
        </div>
      )
    });
    return(
      <div>{productsList}</div>
    )

  }
}

export default ProductsListComponent
