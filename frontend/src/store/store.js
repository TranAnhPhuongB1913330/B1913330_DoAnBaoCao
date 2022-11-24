import { createStore } from 'vuex'
import { callAPILogin } from '../services';
const store = createStore({
  state () {
    return {
     isLogin: false,
     userNameLogin: '',
     cart: [],
     filterProduct: '',
    }
  },
  mutations: {
    changeLogin(state, {username}){
        state.isLogin = true;
        state.userNameLogin = username;
    },
    changeStateCart(state, value){
      state.cart = value;
    }
  },
  actions: {
    axiosLogin({commit}, {data}){
      callAPILogin('post', '/users/login', data)
        .then((res) => {
            if(res.status === 200){
              alert(res.data)
              commit("changeLogin", data)
            }
            else{
              alert("Mat khau hoac tai khoan sai!!")
            }
        })
        .catch((err) => {
          alert(err.response.data)
        })    
    },
  },
  getters: {
    isLogin: state => state.isLogin,
  }
  
})

export default store;