import { createStore , applyMiddleware} from 'redux';
import { Reducers } from './reducers';
import { addCartItem } from '../service/LocalStorage/cartStorage';
import _ from 'lodash';
import ReduxThunk from 'redux-thunk';
export const Store = createStore(Reducers,applyMiddleware(ReduxThunk));

const unsubscribe = Store.subscribe(
  _.throttle(() => {
      addCartItem('cart')(Store.getState().cart.newItem);
  },200))
unsubscribe()

Store.subscribe(()=>{ console.log(Store.getState()) })
