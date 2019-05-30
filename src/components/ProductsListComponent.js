import React  from 'react';

class ProductsListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product:{
        name:"",
        description:"",
        price:0,
        discounted_price:0
      }
    }
  }
  handleAddtoCart = () => {

  }
  render(){
    return(
      <div className="productsList">
          <div class="productsList__data">
            <h4>{this.state.product.name}</h4>
            <img src="" alt="image"/>
          </div>
          <div class="productsList__price">
            <span>{this.state.product.price}</span>
            <button onClick={(e) => this.handleAddToCart(e)} type="button">Add Cart</button>
          </div>
          <div class="productsList__description">
            {this.state.product.description}
          </div>
      </div>
    )
  }
}

export default ProductsListComponent
