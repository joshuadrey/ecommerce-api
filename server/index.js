const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express()

app.use(express.json())

//Endpoint
// app.get('/api/')

const port = 3113

app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct);



app.listen(port, () => console.log(`Server running on ${port}`))

