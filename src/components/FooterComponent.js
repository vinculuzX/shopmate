import React from 'react'
import {Categories} from '../models/CategoriesModel';
import '../styles/scss/components/FooterComponent.scss';
import facebook from '../assets/images/Icon/icons-facebook-grey.png';
import twitter from '../assets/images/Icon/icons-twitter-grey.png';
import instagram  from '../assets/images/Icon/icons-instagram-grey.png';
import pintrest from '../assets/images/Icon/icons-pinterest-grey.png';

class FooterComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories:Categories
    }
  }
  render(){
    const categoriesList = this.state.categories
    .map((cat,index) => {
      return(
        <li key={index}><a href={cat.name}>{cat.name}</a></li>
      )
    })
    return(
      <div className="footer">
        <div className="footer__list">
            <div className="footer__listCategory">
              <ul>
                {categoriesList}
              </ul>
            </div>
            <div className="footer__listSocialNetwork">
              <ul>
                <li><img src={facebook} alt="facebook"/></li>
                <li><img src={twitter} alt="twitter"/></li>
                <li><img src={instagram} alt="instagram"/></li>
                <li><img src={pintrest} alt="facebook"/></li>
              </ul>
            </div>
            <div className="footer__company">
              2016 shopmate Ltds <span></span> Contact <span></span> Privacy Politics
            </div>
        </div>
      </div>
    )
  }
}

export default FooterComponent
