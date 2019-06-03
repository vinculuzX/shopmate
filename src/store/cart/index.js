import {ADD_TO_CART,REMOVE_TO_CART} from './types';
import { retrieveCart , addCartItem } from '../../service/LocalStorage/cartStorage'

const cartLocalStorageData = (state) => {
  let retrieveCartData = retrieveCart.getItem('cart');
  if(retrieveCartData === undefined){
    retrieveCartData = []
    addCartItem('cart')([])
  }else{
    retrieveCartData = JSON.parse(localStorage.getItem('cart')).cart.newItem
  }
  return retrieveCartData
}

const initialState = {
  newItem:cartLocalStorageData()
}
export const cartReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return{
        ...state,
        newItem: [
            ...state.newItem ,
            action.newItem
        ]
      };
    default:
      return state;
  }
}
