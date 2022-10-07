
import axios from 'axios';

export function storeProduct(product) {
    axios.post('https://upayment-62f18-default-rtdb.firebaseio.com/products.json', product)
}
export function fetchProduct() {
    axios.get('https://upayments-studycase-api.herokuapp.com/api/products')
}
export async function fetchProducts() {
   const response = await axios.get('https://upayment-62f18-default-rtdb.firebaseio.com/products.json')
   const products = [];
    console.log(response.data);
   for(const key in response.data) {
     const productObj = {
        id: key,
        productName: response.data[key].productName,
        price: response.data[key].price,
        desc: response.data[key].desc,
        imageLink: response.data[key].imageLink, 
        category: response.data[key].category
     }
     products.push(productObj)
   }

   return products;
}