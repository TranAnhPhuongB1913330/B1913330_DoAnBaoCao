<template>
    <div class="login">
        <span class="login-title">LOGIN</span>
        <input type="text" v-model="username"  class="login-username" placeholder="Username">
        <input type="password" v-model="password" class="login-password" placeholder="Password">
        <button v-on:click="getStateLogin()" class="login-btn">Login</button>
        <span class="login-another">Login width:</span>
        <div class="login-logo">
                <i class='bx bxl-facebook-square'></i>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-youtube' ></i>
                <i class='bx bxl-instagram-alt' ></i>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import {callAPIGetToCart} from '../services/index'
export default{
   
    data() {
        return {
            username: '',
            password:'',
        }
    },
    computed: {
        ...mapGetters(['isLogin'])
    },
    methods: {
        getStateLogin(){
            this.$store.dispatch("axiosLogin", {data: {username: this.username, password: this.password}})
            setTimeout(() => {
                    if(this.isLogin === true){
                        localStorage.setItem("usernamStorage",JSON.stringify({username: this.username, password: this.password})) 
                        this.$router.push("/")
                    }else{
                        console.log(this.isLogin)
                    }
            }, 3000)
            
        }
        
    }
}
</script>

<style>
.login{
    padding: 20px;
    margin: 25vh auto;
    width: 30%;
    height: auto;
    text-align: center;
    background: rgb(250, 248, 248);
    align-items: center;
}
.login-title{
    display: block;
    font-size: 20px;
}
.login-username,.login-password,.login-btn{
    width: 80%;
    height: 30px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px;
}
.login-btn{
    background: rgb(215, 209, 209);
}
.login-btn:hover{
    background: rgb(226, 216, 216);
}
.login-another{
    display: block;
    font-size: 15px;
    margin: 10px;
}
.login-logo i{
    padding: 20px;
    font-size: 40px;
}

@media screen and (max-width: 760px) {
    .login{
        width: 90%;
    }
    .login-logo i{
        padding: 10px;
        font-size: 30px;
    }
}
</style>