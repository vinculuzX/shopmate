import React from 'react'
import {Categories} from '../models/CategoriesModel';

class FooterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
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
      <div className="footer">
        <div className="footer__barTop">
            <h3>title</h3>
            <span>x</span>
        </div>
        <div className="footer__list">
            <div className="footer__listCategory">
              <h4>Category Title</h4>
              <br/>
              <ul>
                {categoriesList}
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default FooterComponent
