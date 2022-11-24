const Users = require("../models/user");


exports.findUsers = (req, res) => {
    Users.find({})
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
}

exports.findUsersOneGetCart = async (req, res) => {
    var username = req.body.username;
    // console.log(username)
    await Users.findOne({
        username: username
    })
    .then((data) => res.send(data.cart))
    .catch((err) => res.send(err))
}

exports.login = async(req, res) =>{
    var username = req.body.username;
    var password = req.body.password;

    await Users.findOne({
        username: username, 
        password: password
    }).then(data=>{
        if(data){
            res.status(200).json('dang nhap thanh cong')
        }else{
            res.status(404).json('Dang nhap that bai!!!!')
        }
    })
    .catch(err=> {res.json('co loi tu phia sever')})
}

exports.register = (req, res) =>{
    var username = req.body.username;
    var password = req.body.password;

    Users.findOne({
        username: username
    }).then(data => {
        if(data){
            res.json('username da ton tai')
        }else{
            Users.create({
                username: username,
                password: password
            })
            .then(data => {res.json("dang ky thanh cong")})
            .catch(err => {res.json('dang ky khong thanh cong')})
        }
    })
}

exports.deleteUser = (req, res) => {
    var id = req.params.id;
    Users.deleteOne({
        _id: id
    }).then(data => res.json('delete thanh cong'))
      .catch(err => res.status(500).json('loi server')); 
}


