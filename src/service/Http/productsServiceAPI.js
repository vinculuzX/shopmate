import axios from 'axios';

const URL_BASE = 'https://backendapi.turing.com';

export const getAllProducts = () => {
    return axios.get(`${URL_BASE}/products`)
    .then(
      (res)=>{
        return res.data
      });
}

export const  getAllProductsByCategory = async (category_id) => {
  return await axios.get(`${URL_BASE}/products/inCategory/${category_id}`);
}

// export const async getProductById = (product_id) => ({
//   return await axios.get(`${URL_BASE}/products/${product_id}`);
// })
//
// export const async getProductsBySearch = (product_string) => ({
//   return await axios.get(`${URL_BASE}/products/search?${product_string}`);
// })
