import express from 'express';
import {getAllProducts, getProduct, deleteProduct, addProduct} from '../controllers/product.controller.js';

const routes = express.Router();

routes.get('/products', getAllProducts)
routes.get('/products/:id', getProduct)
routes.delete('/products/:id', deleteProduct)
routes.post('/products', addProduct)


export default routes