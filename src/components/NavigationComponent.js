import React from 'react';
import {Categories} from '../models/CategoriesModel';

class NavigationComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantityItems:0,
      categories:Categories
    }
  }
  render(){
    const categoriesList = this.state.categories
    .map((cat) => {
      return(
        <li key={cat.category_id}><a href={cat.name}>{cat.name}</a></li>
      )
    })
    return(
      <div className="navigation">
        <div className="navigation__list">
            <h3>Title</h3>
            <ul>
              {categoriesList}
            </ul>
        </div>
        <div className="navigation__actionBuy">
          <div className="search">
            <input type="text" placheholder="search anything"/>
          </div>
          <div className="bag">
            <i></i><span>{this.state.quantityItems}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default NavigationComponent
