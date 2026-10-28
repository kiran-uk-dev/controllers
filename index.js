const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use('/products', productRoutes);

const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running: ${port}`);
})