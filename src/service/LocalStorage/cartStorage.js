import { loadStorage , saveStorage } from './localStorageService'

export const addCartItem = (key) => (state) => {
  saveStorage(key)(state);
}

export const retrieveCart = {
    getItem: (key) => {
      return loadStorage(key);
    },
    getCountItem: (key) => {
      if(loadStorage(key).length > 0 ){
        return loadStorage(key).length
      }
    }
}
