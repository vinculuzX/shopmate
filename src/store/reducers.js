import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import {searchInputReducer , selectNavigationFilterReducer } from './filter';
import {stateModalReducer , chooseModalReducer} from './modal';

export const Reducers = combineReducers({
  cart:cartReducer,
  searchInput:searchInputReducer,
  selectNavigationFilter:selectNavigationFilterReducer,
  stateModal:stateModalReducer,
  chooseModal:chooseModalReducer

})
