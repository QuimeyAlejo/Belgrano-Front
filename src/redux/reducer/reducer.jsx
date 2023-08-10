const initialState = {
  products: [],
  allproducts: [],
  // detail: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        allproducts: action.payload,
      };
   

    case "GET_filterByTypeProduct":
    // case "GET_PRODUCTSTYPE":
      const allProducts = state.allproducts;
      const tipoFilter =
        action.payload === "All"
          ? allProducts
          : allProducts.filter((e) => e.tipo === action.payload);
      // console.log(JSON.stringify(tipoFilter) + 'asd');
      return {
        ...state,
        products: tipoFilter,
      };
    //---------------------------------------------------------------------------------------------------------------------------------------------//
    case "ORDER_BY_PRICE":
      let sortedForPrice =
        action.payload === "may"
          ? state.products.sort((a, b) => a.precio - b.precio)
          : state.products.sort((a, b) => b.precio - a.precio);
      // console.log(JSON.stringify(sortedForPrice) + "identificador")
      return {
        ...state,
        products: sortedForPrice,
      };

    //---------------------------------------------------------------------------------------------------------------------------------------------//
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    case "CLEAN_DETAIL":
      return {
        ...state,
        detail: {},
        // detail: []
      };
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
    case "GET_PRODUCT_ID":
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
