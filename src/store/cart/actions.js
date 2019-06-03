import {ADD_TO_CART , REMOVE_TO_CART } from './types'

export const incrementCart = item => ({
  type:ADD_TO_CART,
  newItem:item
})
export const decrementCart = item => ({
  type:REMOVE_TO_CART,
  newItem:item
})
