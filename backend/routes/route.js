const express = require("express");
const API = require("../controllers/products.controller");
const APIUsers = require("../controllers/users.controller"); 
const router = express.Router();


router.route('/')
    .get(API.findAll)
    .post(API.create)
    .delete(API.deleteAll)

    
router.route("/men")
    .get(API.findMale)

router.route("/women")
    .get(API.findFemale)

router.route("/users")
    .get(APIUsers.findUsers)

router.route("/users/login")
    .post(APIUsers.login)
    
router.route("/users/register")
    .post(APIUsers.register) 

router.route("/cart")
    .post(APIUsers.findUsersOneGetCart)

router.route("/cartone/:id")
    .get(API.findOneCart)
    
router.route("/searchId/:id")
    .put(API.addToCart)

router.route("/remove/:id")
    .delete(API.removeFromCart)

router.route("/users/:id")
    .delete(APIUsers.deleteUser)
    
router.route("/:id")
    .get(API.findOne)
    .put(API.update)
    .delete(API.delete)




module.exports = router;
