const express = require("express");
const mongoose = require("mongoose");
const routerApi = require("./routes/route");
const bodyParser = require('body-parser');
const cors = require('cors');
//const path = require('path');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}));



mongoose.connect('mongodb://0.0.0.0:27017/NewData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("connect thanh cong"))
  .catch((err)=>console.log(err))


app.use("/api/products", routerApi);


// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         cb(null, './images')
//     },

//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, file.originalname);
//     }
// })

// const upload = multer({storage: storage})
// upload image with multer
// app.get("/upload", (req, res) => {
//     res.send("upload");
// })
// app.post("/upload", upload.single(),(req, res) => {
//     res.send("Image upload");
// })

app.get("/", (req, res) => {
    res.send("hello ae");
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running with http://localhost${PORT}`);
})
