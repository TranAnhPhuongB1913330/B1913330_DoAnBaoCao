<template>
    <div>  
        <div class="footer">
            <div class="footer-card">
                <ul>
                    <li class="footer-title">GIFT CARDS</li>
                    <li>Promotions</li>
                    <li>Find A Store</li>
                    <li>Sign Up For Email</li>
                </ul>
            </div>
            <div class="footer-help">
                <ul>
                    <li class="footer-title">GET HELP</li>
                    <li>Contact Us</li>
                    <li>Payment Options</li>
                    <li>Returns</li>
                </ul>
            </div>
            <div class="footer-about">
                <ul>
                    <li class="footer-title">ABOUT NIKE</li>
                    <li>News</li>
                    <li>Purpose</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div class="footer-logo">
                <i class='bx bxl-facebook-square'></i>
                <i class='bx bxl-twitter'></i>
                <i class='bx bxl-youtube' ></i>
                <i class='bx bxl-instagram-alt' ></i>
            </div>
            <!-- <div class="footer-info">
                <span>© 2022 Nike</span>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style>
.footer{
    margin: 50px auto;
    max-width: 1200px;
    height: 150px;
    background: #000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
}
.footer-card,.footer-help,.footer-about ul{
    text-decoration: none;
    color: #fff;
    font-size: 10px;
    padding: 40px;
}
.footer-logo{
    font-size: 50px;
    color: #fff;
}
.footer-logo i{
    padding: 10px;
}
.footer-title{
    /* margin-right: 100px; */
    list-style: none;
    font-size: 20px;
}
.footer-info{
    color: #fff;
}
@media screen and (max-width: 760px) {
    .footer{
        display: block;
        height: auto;
        margin: 0 auto;
        text-align: center;
        list-style: none;
    }
    li{
        list-style: none;
    }
}
</style>