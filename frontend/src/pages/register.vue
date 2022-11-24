<template>
    <div>
        <div class="register">
        <span class="register-title">Register</span>
        <input type="text" v-model="username" class="register-username" placeholder="Username">
        <input type="password" v-model="password" class="register-password" placeholder="Password">
        <button v-on:click="Register()" class="register-btn">register</button>
        <span class="register-another">register width:</span>
        <div class="register-logo">
                <i class='bx bxl-facebook-square'></i>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-youtube' ></i>
                <i class='bx bxl-instagram-alt' ></i>
        </div>
    </div>
    </div>
</template>

<script>
import {callAPIRegister} from "../services/index"

export default{
    data() {
        return {
            username: '',
            password:'',
        }
    },

    methods: {
        Register(){
            callAPIRegister('post', '/users/register', {username: this.username, password: this.password})
            .then((res) => {
                console.log(res)
                alert(res.data)
            })
            .catch((err) => console.log(err))
        } 

    }
}
</script>

<style>
.register{
    padding: 20px;
    margin: 25vh auto;
    width: 30%;
    height: auto;
    text-align: center;
    background: rgb(250, 248, 248);
    align-items: center;
}
.register-title{
    display: block;
    font-size: 20px;
}
.register-username,.register-password,.register-btn{
    width: 80%;
    height: 30px;
    margin: 10px;
    border: none;
    border-radius: 5px;
    padding: 5px;
}
.register-btn{
    background: rgb(215, 209, 209);
}
.register-btn:hover{
    background: rgb(226, 216, 216);
}
.register-another{
    display: block;
    font-size: 15px;
    margin: 10px;
}
.register-logo i{
    padding: 20px;
    font-size: 40px;
}
@media screen and (max-width: 760px) {
    .register{
        width: 90%;
    }
    .register-logo i{
        padding: 10px;
        font-size: 30px;
    }
}
</style>