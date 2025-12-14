import {productsService} from '../services/products.service.js'

export const getAllProducts = async (req, res) => {
    try{ 
        console.log('getting all products..')
        const products = await productsService.getAllProducts();
        console.log(products)
        res.status(200).json(products)
    } catch(e) {
        console.log(e);
        res.status(500).json(e);
    };
}

export const getProduct = async (req, res) => {
    try{
        console.log("getting a product..");
        const id = req.params.id;
        if (id) {
            console.log(id)
            const product = await productsService.getProductById(id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: "Product not found" });
            };
        } else {
            res.status(400).json(error);
        };
    } catch(e) {
        console.log(e)
        res.status(500).json(e);
    };
}

export const deleteProduct = async (req, res) => {
    try {
        console.log("deleting a product..");
        const id = req.params.id;

        if (id) {
            await productsService.deleteProduct(id);
            res.status(200).send('Product deleted succesfully');
        } else {
            res.status(400).json(error);
        };
    } catch(e) {
        console.log(e)
        res.status(500).json(e);
    };
}

export const addProduct = async (req, res) => {
    try {
        console.log('adding a product');
        const product = req.body;
        const newProduct = await productsService.addProduct(product);
        res.status(200).json(newProduct);
    } catch(e) {
        console.log(e)
        res.status(500).json(e);
    };
}