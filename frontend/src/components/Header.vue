<template>
    <div>
        <div class="header">
            <div class="nav-top">
            </div>
            <div class="navbar">
                <i class='bx bx-menu menu' @click="showNavList()"></i>

                <div class="wrap-cart-responsive" @click="clickCart()">
                    <i class='bx bx-shopping-bag nav-cart'></i>
                    <span class="count-product">{{showCart.length}}</span>
                    <div class="cart" v-if="isClick">
                            <div v-for="product in showCart" :key="product.id" class="product-item-cart">
                                <img :src=product.image alt="" class="cart-img">
                                <div style="padding:2px">
                                    <span class="product-item-cart-title">{{product.title}}</span>
                                    <div class="product-item-cart-price">Price: {{product.price}}$</div>
                                    <div>Amount: {{product.count}}</div>
                                    <button class="product-item-cart-btnRemove" @click="removeProduct(product.id)">X</button>
                                </div>
                            </div>
                            <span class="total-cart">Total: {{getPrice}}$</span>
                    </div>
                </div>

                <div class="active" v-if="isShow">
             
                        <a href=""><li style="color:black">HomePage</li></a>
                        <router-link to="/men" ><a href=""><li style="color:black">Men</li></a></router-link>
                        <router-link to="/women"><a href=""><li style="color:black">Women</li></a></router-link>
                        <div class="wrap-regis" v-if="!$store.state.isLogin">
                            <router-link to="/Register"><a href=""><li style="color:black"><ins>Sign In</ins></li></a></router-link>
                            <router-link to="/login"><a href=""><li style="color:black"><ins>Login</ins></li></a></router-link>
                        </div>

                        <div v-else class="wrap-login">
                            <span class="usernameLogin" @click="clickLogOut()">{{$store.state.userNameLogin}}</span>
                            <div class="logout" v-if="isClickOut" @click="logOut()"><button>Log Out</button></div>
                        </div>
                        
                </div>
                <!--  -->
                <ul class="nav-list">
                    <img src="../assets/image/nike-logo.jpg" alt="" id="logo">
                    <a href=""><li>HomePage</li></a>
                    <router-link to="/men"><a href=""><li>Men</li></a></router-link>
                    <router-link to="/women"><a href=""><li>Women</li></a></router-link>
                    <i class='bx bx-search search-icon'></i>
                    <input type="text" placeholder="Search" class="search-input" v-model="this.$store.state.filterProduct">
                    <div style="display: flex" v-if="!$store.state.isLogin">
                        <router-link to="/Register"><a href=""><li><ins>Sign In</ins></li></a></router-link>
                        <router-link to="/login"><a href=""><li><ins>Login</ins></li></a></router-link>
                    </div>

                    <div v-else class="wrap-login">
                        <span class="usernameLogin" @click="clickLogOut()">{{getUserName}}</span>
                        <div class="logout" v-if="isClickOut" @click="logOut()"><button>Log Out</button></div>
                    </div>
                    
                
                    <div class="wrap-cart">
                        <i class='bx bx-shopping-bag nav-cart' @click="clickCart()"></i>
                        <span class="count-product">{{showCart.length}}</span>
                        <!-- gio hang -->
                        <div class="cart" v-if="isClick">
                            <div v-for="product in showCart" :key="product.id" class="product-item-cart">
                                <img :src=product.image alt="" class="cart-img">
                                <router-link :to="`/detail/${product.id}`" style="font-size:10px; padding: 0;">
                                    <div style="padding:2px">
                                        <span class="product-item-cart-title">{{product.title}}</span>
                                        <div class="product-item-cart-price">Price: {{product.price}}$</div>    
                                        <div>Amount: {{product.count}}</div>
                                    </div>
                                </router-link>
                                <button class="product-item-cart-btnRemove" @click="removeProduct(product.id)">X</button>
                               
                            </div>        
                            <span class="total-cart">Total: {{getPrice}}$</span>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="nav-bottom">

            </div>

        </div>
    </div>
</template>

<script>
import {callAPIGetToCart, callAPIRemoveItemCart} from "../services/index"
export default {
    data(){
        return{
            isClick: false,
            isClickOut: false,
            isShow: false,
            total: 0,
        }
    },
    computed: {
       getPrice(){
            let totalPrice = 0;
            const getCart = this.$store.state.cart;
            if(getCart){
                getCart.forEach(item => {
                    totalPrice = totalPrice + (item.price * item.count);
                })
            }
            return totalPrice
       },
       showCart(){
            return this.$store.state.cart;
       },
       getUserName(){
            return this.$store.state.userNameLogin;
       }
    },
    methods: {
        async clickCart(){
            this.isClick = !this.isClick;
            const getData = await callAPIGetToCart('post', '/', {username: this.getUserName})
            await this.$store.commit("changeStateCart", getData.data)
        },
        async removeProduct(id){
            const getData = await callAPIRemoveItemCart('delete', '/' + id, {username: this.getUserName})
            await this.$store.commit("changeStateCart", getData.data.cart)
        },
        clickLogOut(){
            this.isClickOut = !this.isClickOut;
        },

        logOut() {
            this.$store.state.userNameLogin = '';
            this.$store.state.isLogin = false;
            localStorage.removeItem('usernamStorage');
        },
        showNavList(){
            this.isShow = !this.isShow;
        }
    },
    created() {
        var getData = localStorage.getItem('usernamStorage');
        var dataAfterGetFromLocal = JSON.parse(getData);
        
        if(dataAfterGetFromLocal){
            this.$store.state.userNameLogin = dataAfterGetFromLocal.username;
            this.$store.state.isLogin = true;
        }else{
            this.$store.state.userNameLogin = '';
            this.$store.state.isLogin = false;
        }
    },

   

   
}
</script>

<style>
 
.header{
    max-width: 1200px;
    margin: 0 auto;
}
.nav-top{
    height: 35px;
    background: rgb(247, 242, 242);
}
.navbar{
    height: 55px;
    background: #fff;  
}
.nav-bottom{
    height: 35px;
    background: rgb(247, 242, 242);
}
.nav-list{
    display: flex;
    justify-content: center;
}
.nav-list a{
    text-decoration: none;
    list-style: none;
    color: black;
    font-size: 20px;
    padding: 10px 0 10px 0;
}
.nav-list a li{
    padding: 0 20px;
}
#logo{
    width: auto;
    height: 50px;
}
.search-input{
    margin-top: 12px;
    padding: 10px 22px;
    border-radius: 20px;
    border: 2px solid;
    height: 30px;
}
.search-icon{
    color:rgb(150, 144, 144);
    font-size: 20px;
    position: relative;
    top: 19px;
    left: 25px;
}
.nav-cart{
    position: relative;
    font-size: 30px;
    height: 40px;
    color: black;
    padding: 10px;
    cursor: pointer;
}
.nav-cart::after{
    content: '';
    width: 17px;
    height: 17px;
    display: inline-block;
    background: #fff;
    border-radius: 50px;
    position: absolute;
    top: 12px;
    right: 5px;
    border:1px solid black;
}
.count-product{
    position: absolute;
    font-size: 10px;
    top: 14px;
    right: 8px;
}
.wrap-cart{
    position: relative;
}
.cart{
    position: absolute;
    right: 0;
    top: 45px;
    /* display: none; */
    width: 250px;
    background: #fff;
    z-index: 10;
    font-size: 10px;
    border-radius: 2px;
    border: 1px solid rgb(200, 191, 191);
    padding: 2px;
    height: auto;
    overflow-y: auto;
    list-style: none;
}
.usernameLogin{
    position: relative;
    top: 15px;
    left: 5px;
}
.wrap-login{
    position: relative;
    cursor: pointer;
}
.logout{
    position: absolute;
    width: 130px;
    height: 30px;
    background: rgb(204, 199, 199);
    top:43px;
    right: auto;
    left: auto;
    text-align: center;
    border-radius: 10px;
    z-index: 2;
}
.logout button{
    margin-top: 4px;
    border: 1px solid;
    border-radius: 5px;
    padding: 2px;
    font-size: 10px;
}
.menu, .active, .wrap-cart-responsive{
    display: none;
}
.wrap-regis{
    display: flex;
}

.cart-img{
    width: auto;
    height: 70px;
    object-fit: contain;
}
.product-item-cart{
    display: flex;
    border-bottom: 2px solid #ddd;
    height: auto;
    position: relative;
    /* font-size: 10px; */
}
.product-item-cart:hover{
    background: rgb(240, 236, 236);
    cursor: pointer;
}
.product-item-cart-btnRemove{
  position:absolute;
  right: 0px;
  width: 30px;
  bottom: 0;
}
.total-cart{
    float: right;
}
@media screen and (max-width: 760px) {
    .nav-list{
        display:none;
   }
   
   .menu{
        display: block;
        font-size: 40px;
        margin: 10px;
        position: relative;
   }
   .active{
        width:100%;
        height: 160px;
        background: rgb(240, 235, 235);
        display: block;
        position: absolute;
        top:80px;
        left: 0;
        z-index: 100;
        text-align: center;
        padding: 14px;
        font-size: 16px;
   }
   .logout{
        position: absolute;
        right: 120px;
   }
   .wrap-regis{
        display: block;
   }
   .wrap-cart-responsive{
        display: block;
        position: absolute;
        top: 42px;
        right: 10px;
   }
}
</style>