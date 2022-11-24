import {createRouter, createWebHashHistory} from "vue-router"
import Home from "./pages/home.vue"
import MenPage from "./pages/menpage.vue"
import WomenPage from "./pages/womenpage.vue"
import Register from "./pages/register.vue"
import Login from "./pages/login.vue"
import ProductDetail from "./pages/productdetail.vue"
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/men',
        component: MenPage
    },
    {
        path: '/women',
        component: WomenPage
    },
    {
        path: '/Register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/detail/:id',
        component: ProductDetail
    }

]; 

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;