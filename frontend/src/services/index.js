import axios from "axios"

export function callAPI(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}
export function callAPIOne(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIMen(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/men${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIWomen(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/women${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPILogin(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/users/login`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}
export function callAPIRegister(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/users/register`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIAddToCart(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/searchId${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIGetToCart(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/cart`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIOneCart(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/cartone${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}

export function callAPIRemoveItemCart(method, endpoint, data){
    return axios({
        method: method,
        url: `http://localhost:3000/api/products/remove${endpoint}`,
        data: data,
        headers: {'Content-Type': 'application/json'}
    });
}