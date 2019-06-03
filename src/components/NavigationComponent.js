import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Categories } from '../models/CategoriesModel';
import {QuantityItemCart} from '../models/ProductsCheckoutModel'
import '../styles/scss/components/NavigationComponent.scss';
import iconBag from '../assets/images/Icon/icons-bag.png';

class NavigationComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      categories:Categories,
      quantity:0,
    }
  }
  componentDidMount(){
    this.setState({
      quantity:QuantityItemCart,
    })
  }
  render(){
    const categoriesList = this.state.categories
    .map((cat,index) => {
      return(
        <li key={index}><a href={cat.name}>{cat.name}</a></li>
      )
    })
    return(
      <div className="navigation">
        <div className="navigation__list">
            <h3><Link to="">SHOPMATE</Link></h3>
            <ul>
              {categoriesList}
            </ul>
        </div>
        <div className="navigation__actionBuy">
          <div className="search">
            <input type="text" placeholder="search anything"/>
          </div>
          <div className="count">
            <Link to="/checkout"><img src={iconBag} alt="bag"/><div className="bag"><b>{this.state.quantity}</b></div></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default NavigationComponent
