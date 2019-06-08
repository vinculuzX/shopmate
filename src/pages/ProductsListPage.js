import React from 'react';
import ProductsListComponent from '../components/ProductsListComponent';
import {connect} from 'react-redux';
class ProductsListPage extends React.Component{

  render(){
    const { input } = this.props
    return(
      <div>
        <ProductsListComponent searchString={input}/>
      </div>
    )
  }
}
const mapStateToProps = store => ({
    input: store.searchInput.input
});
export default connect(mapStateToProps)(ProductsListPage)
