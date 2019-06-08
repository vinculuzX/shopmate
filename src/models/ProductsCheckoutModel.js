import {loadStorage,saveStorage} from '../service/LocalStorage/localStorageService'

if(loadStorage('cart') === undefined){
  saveStorage('cart')([]);
}
  export const ProductsCheckout  =  loadStorage('cart');
  export const QuantityItemCart = ProductsCheckout.length;
  export const ProductsTotal  = ProductsCheckout.reduce((prevValue , accValue) => {
      return Number(Number(prevValue) + Number(accValue.price)).toFixed(2)
  },0);
