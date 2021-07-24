const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require('./connection/connection');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const postRoute = require('./routes/post');
const catRoute = require('./routes/category');
const multer = require('multer');
const path = require('path');

const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});


const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use('/auth',authRoute);
app.use('/user',userRoute);
app.use('/post',postRoute);
app.use('/category',catRoute);

const PORT = process.env.PORT;
app.listen(PORT, () =>{
    console.log(`listening to port ${PORT}`)
})