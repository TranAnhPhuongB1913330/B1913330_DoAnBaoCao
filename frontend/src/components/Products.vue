<template>
    <div>
        <!-- <span v-for="(product,index) in products" :key="index">{{product.description}}</span> -->
        <div class="container">
            <div class="product" v-for="(product,index) in filterProducts" :key="index">
                <router-link :to="`/detail/${product._id}`" class="link">
                    <img :src=product.image alt="" class="img-product">
                    <span class="product-title">{{product.title}}</span>
                    <!-- <span class="product-descr">{{product.description}}</span> -->
                    <span class="product-price">{{product.price}}$</span>
                </router-link>
                <i class='bx bx-shopping-bag add-cart' @click="addToCart(product._id, product.title, product.price, product.image)"></i>
            </div>
        </div>

    </div>
</template>

<script>
import {callAPI, callAPIAddToCart} from "../services/index"


export default{
    data() {
        return {
            products: [],
        }
    },

    created(){
        callAPI('get', '/', null)
            .then((res) => this.products = res.data)
            .catch((err) => console.log(err)) 
    },
    computed: {
        filterProducts(){
            return this.products.filter(product => product.title.includes(this.$store.state.filterProduct))
        },
        getUserName(){
            return this.$store.state.userNameLogin;
        }
    },
    methods: {
        async addToCart(id, title, price, image){
            const getData = await callAPIAddToCart('put', '/' + id , {username: this.getUserName, title, price, image, count: 1})
            if(getData){
                console.log(getData.data.cart)
                alert("Add product successfully!!!")
                await this.$store.commit("changeStateCart", getData.data.cart)
            }
        },
    },

}
</script>

<style>
.container{
    margin: 50px auto;
    max-width: 1200px;
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 22px;
}
.product:hover{
    padding: 5px;
    border-radius: 2px;
    border: 2px solid rgb(24, 24, 24);
    transition: 0.4s;
}
.product{
    position: relative;
}
.product span{
    display: block;
    padding: 5px;
}
.product-title{
    font-size: 18px;
}
.product-descr, .product-price{
    font-size: 13px;
}
.img-product{
    width: 100%;
    height: 280px;
    object-fit: contain;
}
.add-cart{
    position: absolute;
    bottom: 0;
    right: 0;
    background: #000;
    color: #fff;
    padding: 10px;
    cursor: pointer;
}
.link {
    color: black;
    text-decoration: none;
}
@media screen and (max-width: 760px) {
   .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
        gap: 10px;
   }
   .product-title{
        font-size: 15px;
   }
   .product:hover{
        border: none;
    }
}
</style>