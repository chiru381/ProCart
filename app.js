const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');
const morgan = require('morgan');
const productRouter = require('./routes/productRouter');
dotenv.config({path:'./config/config.env'});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan('dev'));

app.get('/', (req, res)=>{
    res.send(`<h1>Cart Application</h1>`);
});
app.use('/products', productRouter);

mongoose.connect(process.env.DATABASEURL,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then((response)=>{
    console.log(`MongoDB connection Successfull`);
})
.catch((err)=>{
    console.log(err);
});

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on Port No: ${process.env.PORT}`);
});