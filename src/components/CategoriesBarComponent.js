import React from 'react';
import axios from 'axios';
import { Categories } from '../models/CategoriesModel';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectNavigationFilterCategory} from '../store/filter/actions';


class CategoriesBarComponent extends React.Component{

  showProductsByCategory = categoryId => {
    const {selectNavigationFilterCategory} = this.props
    selectNavigationFilterCategory(categoryId);
  }
  render(){
    const {categories} = this.props;
    const categoriesList = categories.map((cat,index)=>{
      return(
        <li key={index}><span onClick={this.showProductsByCategory.bind(this,cat.category_id)}>{cat.name}</span></li>
      )
    })
    return(
      <div>
        {categoriesList}
      </div>
    )
    }
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectNavigationFilterCategory } , dispatch);

  export default connect (null,mapDispatchToProps)(CategoriesBarComponent)
