import axios from 'axios';

export function getProducts() {
    return async function (dispatch) {
        var json = await axios.get('http://localhost:3000/products')
        // var json = await axios.get('https://belgrano-backend.onrender.com/products')

        return dispatch({
            type: 'GET_PRODUCTS',
            payload: json.data
        })
    }
}
export function filterByTypeProduct(payload){
    return{
        type: 'GET_filterByTypeProduct',
        payload
    }
}
//----------------------------FUNCION DE ORDENAMIENTO DE PRODUCTOS POR BACKEND----------------------------------------//
// export function filterByTypeProduct2(){
// return async function (dispatch) {
//     var json = await axios.get('/productos/tipo/:tipo')

//     return dispatch({
//         type: 'GET_filterByTypeProduct',
//         payload:json.data
//     })
// }}
export function filterForPrice(payload){
    return{
        type:'ORDER_BY_PRICE',
        payload
    }
}
export function getProductsForID(id) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3000/products/id/${id}`);
      // let json = await axios.get(`https://belgrano-backend.onrender.com/products/id/${id}`);
      return dispatch({
        type: 'GET_PRODUCT_ID',
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanDetail(){
    return{
        type: 'CLEAN_DETAIL'
    }
}