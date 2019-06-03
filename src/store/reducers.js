import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import {searchInputReducer} from './filter';

export const Reducers = combineReducers({
  cart:cartReducer,
  searchInput:searchInputReducer
})
