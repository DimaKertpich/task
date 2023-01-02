
export default{

    state:{
        products: []
    },

    actions:{
      async getProducts({commit}){
        const res = await fetch('https://fakestoreapi.com/products')
        const saveProducts = await res.json();
        commit('updateProducts', saveProducts)
      }
    },

    mutations:{
        updateProducts(state, saveProducts){
            state.products = saveProducts
        }
    }

}