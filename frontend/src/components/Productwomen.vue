<template>
    <div>
        <!-- <span v-for="(product,index) in products" :key="index">{{product.description}}</span> -->
        <div class="container">
            <div class="product" v-for="(product,index) in products" :key="index">
                <router-link :to="`/detail/${product._id}`" class="link">
                    <img :src=product.image alt="" class="img-product">
                    <span class="product-title">{{product.title}}</span>
                <!-- <span class="product-descr">{{product.description}}</span> -->
                    <span class="product-price">{{product.price}}$</span>
                    <i class='bx bx-shopping-bag add-cart'></i>
                </router-link>
            </div>
        </div>
        
    </div>
</template>

<script>
import {callAPIWomen} from "../services/index"
export default{
    data() {
        return {
            products: ''
        }
    },

    created(){
        callAPIWomen('get', '/', null)
            .then((res) => console.log(this.products = res.data))
            .catch((err) => console.log(err)) 
    }

}
</script>

<style>

</style>