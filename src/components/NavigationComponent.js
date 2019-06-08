import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Categories } from '../models/CategoriesModel';
import { QuantityItemCart } from '../models/ProductsCheckoutModel'

import iconBag from '../assets/images/Icon/icons-bag.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchInput , selectNavigationFilterDepartment} from '../store/filter/actions';
import _ from 'lodash';

import CategoriesBarComponent from './CategoriesBarComponent'
import '../styles/scss/components/NavigationComponent.scss';
class NavigationComponent extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.state = {
      department:[],
      categories:Categories,
      quantity:0,
    }
  }

  componentDidMount(){
    this.setState({
      quantity:QuantityItemCart,
    })
    axios.get('https://backendapi.turing.com/departments').then((res)=>{
      const department =  res.data;
      this.setState({
        department:department
      })
    })
  }
  getCategoriesByDepartment = departmentId => {
    const {selectNavigationFilterDepartment} = this.props
    selectNavigationFilterDepartment(departmentId);
    axios.get(`https://backendapi.turing.com/categories/inDepartment/${departmentId}`).then((res)=>{
      const categories = res.data
      this.setState({
        categories:categories
      })
    })
  }

  render(){
    const { searchInput } = this.props;
    const departmentList = this.state.department
    .map((dep,index) => {
      return(
        <li key={index}><span onClick={this.getCategoriesByDepartment.bind(this,dep.department_id)}>{dep.name}</span></li>
      )
    })
    return(
      <div>
        <div className="navigation">
          <div className="navigation__list">
              <h3><Link to="">SHOPMATE</Link></h3>
              <ul>
                {departmentList}
              </ul>
          </div>
          <div className="navigation__actionBuy">
            <div className="search">
              <input type="text" ref={this.textInput} onKeyUp={_.debounce(() => {searchInput(this.textInput.current.value)},1000)} placeholder="search anything"/>
            </div>
            <div className="count">
              <Link to="/checkout"><img src={iconBag} alt="bag"/><div className="bag"><b>{this.state.quantity}</b></div></Link>
            </div>
          </div>
        </div>
        <div className="categoryBar">
          <CategoriesBarComponent categories={this.state.categories}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchInput, selectNavigationFilterDepartment } , dispatch);

export default connect (null,mapDispatchToProps)(NavigationComponent)
