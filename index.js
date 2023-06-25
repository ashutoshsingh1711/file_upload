// app create
const express = require('express');
const app = express();

//PORT find
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//middleware add 
app.use(express.json());
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//db se connect
const db = require('./config/database');
db.dbConnect();

//cloud se connect
// const cloudinary = require('./config/cloudinary');
// cloudinary.cloudinaryConnect();

//api route mount
const Upload = require('./routes/FileUpload');
app.use("/api/v1/upload", Upload);

//activate server
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);  
})