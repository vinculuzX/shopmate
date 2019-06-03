import { createStore } from 'redux';
import { Reducers } from './reducers';
import { addCartItem } from '../service/LocalStorage/cartStorage';

export const Store = createStore(Reducers);
const unsubscribe = Store.subscribe(
  () => {
    addCartItem('cart')(Store.getState())
  });
