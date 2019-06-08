import React from 'react'
import axios from 'axios';
import {ProductDetails} from '../models/ProductDetailsModel';
import '../styles/scss/components/ProductDetailsComponent.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCart } from '../store/cart/actions';
class ProductDetailsComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      productDetails:ProductDetails
    }
  }
  componentDidMount(){
    const { productId } = this.props
    axios.get(`https://backendapi.turing.com/products/${productId}/details`).then((res)=>{
        const details  = res.data;
        this.setState({
          productDetails:details
        })
    })
  }
  render(){
     const productDetails = this.state.productDetails
     .map((product,index)=>{
       product.image = `https://backendapi.turing.com/images/products/${product.image}`
       return(
         <div key={index} className="productDetails">
           <div className="productDetails__images">
              <img src={product.image} alt={product.image}/>
           </div>
           <div className="productDetails__info">

              <h4>{product.name}</h4>
              <br/><br/>
              <span>{product.description}</span>
              <br/><br/><br/>
              <div className="productDetails__price">
                 <span>{product.price}</span>
                 <span className="discount">{product.discount_price}</span>
              </div>
              <br/><br/><br/><br/>
              <button className="pink" onClick={() => incrementCart(product)}>Buy Now</button>
           </div>

         </div>
       )
     })
     return(
       <div>{productDetails}</div>
     )
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCart }, dispatch);
export default connect(null,mapDispatchToProps) (ProductDetailsComponent)
