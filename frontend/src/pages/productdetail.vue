<template>
    <div>
        <Header></Header>
        <div class="container_detail">
            <div class="wrap-img">
                <img :src=product.image alt="" class="img-productdetail">
            </div>
            <div class="wrap-descr">
                <span class="product-titledetail">{{product.title}}</span> 
                <span class="product-descrdetail">{{product.description}}</span>
                <span class="product-pricedetail">Price: {{product.price}}$</span>
                <button class="detail-btn" @click="buyProduct()">BUY NOW</button>
            </div>
           
        </div>
        <Footer></Footer>
    </div>
    
</template>

<script>
import Header from '../components/Header.vue'
import {callAPIOne} from "../services/index"
import Footer from '../components/Footer.vue'
export default{
  components: { Header, Footer },
    data() {
        return {
            product: '',
        }
    },

    created(){
        callAPIOne('get', '/' + this.$route.params.id, null)
            .then((res) => console.log(this.product = res.data[0]))
            .catch((err) => console.log(err)) 
    },

    methods: {
        buyProduct(){
            if(this.$store.state.isLogin === true){
                alert("Buy product successfully!!!!")
                this.$router.push("/")
            }else{
                alert("Login before buy product!!!")
                this.$router.push('/login')
            }
            
        }
    }

}
</script>

<style>
.container_detail{
    width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-items: center;
}
.img-productdetail{
    margin-top: 40px;
    border-radius: 20px;
    border: 1px solid;
}
.wrap-descr{
    align-items: center;
    text-align: center;
    margin-top: 30px;
    padding: 40px;
}
.product-titledetail, .product-descrdetail, .product-pricedetail{
    display: block;
    padding: 20px;
}
.product-titledetail{
    font-size: 40px;
}
.detail-btn{
    width:80%;
    height: 50px;
    border: none;
    background: black;
    color: #fff;
    border-radius: 20px;
}
.detail-btn:hover{
    cursor: pointer;
    background: rgb(37, 37, 37);
}
@media screen and (max-width: 760px) {
    .container_detail{
        width: 100%;
        display: block;
    }
    .wrap-img{
        margin-top:0;
        text-align: center;
    }
    .img-productdetail{
        width: 90%;
        object-fit: contain;
        text-align: center;
        padding: 10px;
    }
    .wrap-descr{
        margin-top: 0;
        padding: 0;
    }
    .product-titledetail{
        font-size: 20px;
        margin-top: 0;
    }
    .product-descrdetail{
        font-size: 12px;
    }
    .detail-btn{
        margin-bottom: 10px;
    }
}
</style>