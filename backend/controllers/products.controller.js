const Products = require("../models/products");
const CartUser = require("../models/user")

exports.findAll = (req, res) => {
    Products.find({})
        .then(data => res.send(data))
        .catch(err => res.status(500).json('Loi sever'))
}

exports.findOne = (req, res) => {
    var id = req.params.id
    Products.find({
        _id: id
    }).then(data => res.send(data))
      .catch(err => res.status(500).json('Loi sever'))
}

exports.findOneCart = (req, res) => {
    var id = req.params.id
    Products.findOne({
        _id: id
    }).then(data => res.send(data))
      .catch(err => res.status(500).json('Loi sever'))
}

exports.create = (req, res) => {
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var image = req.body.image;
    var gt = req.body.gt;
    Products.create({
        title: title,
        description: description,
        price: price,
        image: image,
        gt: gt,
    }).then(data => res.json('them du lieu thanh cong'))
      .catch(err => res.status(500).json('Loi sever'))
}

exports.update = (req, res) => {
    var id = req.params.id;
    var title = req.body.title;
    var description = req.body.description;
    var price = req.body.price;
    var image = req.body.image;
    var gt = req.body.gt;
    Products.findByIdAndUpdate(id, {
        title: title,
        description: description,
        price: price,
        image: image,
        gt: gt,
    }).then(data => res.json('update thanh cong'))
      .catch(err => res.status(500).json('loi server'));
}

exports.delete = (req, res) => {
    var id = req.params.id;
    Products.deleteOne({
        _id: id
    }).then(data => res.json('delete thanh cong'))
      .catch(err => res.status(500).json('loi server')); 
}

exports.deleteAll = (req, res) => {
    Products.deleteMany({
    }).then(data => res.json('deleteALL thanh cong'))
      .catch(err => res.status(500).json('loi server')); 
}

exports.findMale = (req, res) => {
    Products.find({
       gt: 1
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).json('Loi sever khi tim kiem men'))
}

exports.findFemale = (req, res) => {
    Products.find({
        gt: 0
    })
    .then(data => res.send(data))
    .catch(err => res.status(500).json('Loi sever khi tim kiem women'))
}

exports.addToCart = async (req, res) => {
    const id = req.params.id;
    const username = req.body.username; 
    let count = req.body.count;
    var title = req.body.title;
    var price = req.body.price;
    var image = req.body.image;
 
    let getCart = await CartUser.findOne({
        username
    })
    let getItem = getCart.cart;
    const findItemById = getItem.find(item => {
        return item.id === id;
    })

    if(!findItemById){
        CartUser.findOneAndUpdate(
            {username:username},
            {$push: {'cart': {id, title, price, image, count}}},
            {new: true}
        ).then(data => {
            res.send(data)
        })
        .catch(err => res.status(500).json('Loi sever khi tim kiem id'))
    }else{
        const cartArr =  getItem.map(item => {
            if(item.id === id){
                item.count++;
            }
            return item
        })

        console.log(cartArr)
        const data = await CartUser.findOneAndUpdate(
            {username:username},
            {cart: cartArr}
        )
        res.send(data)
    }

}

exports.removeFromCart = (req, res) => {
    const id = req.params.id;
    const username = req.body.username; 
    CartUser.findOneAndUpdate(
        {username:username},
        {$pull: {'cart': {id}}},
        {new: true}
    ).then(data => res.send(data))
     .catch(err => res.status(500).json('Loi sever khi tim kiem id'))
}