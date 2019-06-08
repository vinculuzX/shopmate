import React  from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ProductsList} from '../models/ProductsListModel';
import '../styles/scss/components/ProductListComponent.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCart } from '../store/cart/actions';
class ProductsListComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      product:ProductsList
    }
  }
  componentDidMount(){
    axios.get('https://backendapi.turing.com/products').then((res)=>{
      const allProduct = res.data.rows;
      this.setState({
        product:allProduct
      })
    })
  }
  componentDidUpdate(){
    const { searchString , department , category }  = this.props
    if(searchString !== ""){
      axios.get(`https://backendapi.turing.com/products/search?query_string=${searchString}`).then((res)=>{
        const allProduct = res.data.rows;
        if(allProduct.length > 0){
          this.setState({
            product:allProduct,
          })
        }
      });
    }
    if(department && !category){
      axios.get(`https://backendapi.turing.com/products/inDepartment/${department}`).then((res)=>{
        const allProduct = res.data.rows;
        if(allProduct.length > 0){
          this.setState({
            product:allProduct,
          })
        }
      });
    }
    if(category){
      axios.get(`https://backendapi.turing.com/products/inCategory/${category}`).then((res)=>{
        const allProduct = res.data.rows;
        if(allProduct.length > 0){
          this.setState({
            product:allProduct,
          })
        }
      });
    }
  }


  render(){
    const { incrementCart } = this.props;
    const productsList  = this.state.product
    .map((product,index) => {
      console.log(product);
      const productLink = `/product/${product.product_id}`;
      return(

          <div key={index} className="card">
              <div className="card__image">
                  <img src={`https://backendapi.turing.com/images/products/${product.thumbnail}`} alt={product.thumbnail}/>
              </div>
              <div className="card__content">
                  <Link to={productLink}><h4 className="title">{product.name}</h4></Link><br/>
                  <span className="price">{product.price}</span><br/><br/>
                  <button className="pink" onClick={() => incrementCart(product)}>Add Cart</button>
              </div>
          </div>

      )
    });
    return(
      <div className="productsList">{productsList}</div>
    )

  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCart }, dispatch);
const mapStateToProps = store => ({
  category:store.selectNavigationFilter.category,
  department:store.selectNavigationFilter.department
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductsListComponent);
