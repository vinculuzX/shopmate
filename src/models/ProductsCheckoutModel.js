import {loadStorage} from '../service/LocalStorage/localStorageService'
export const ProductsCheckout  =  loadStorage('cart').cart.newItem;
export const QuantityItemCart = ProductsCheckout.length
export const ProductsTotal  = ProductsCheckout.reduce((prevValue , accValue) => {
    return Number(prevValue) + Number(accValue.price)
},0)
