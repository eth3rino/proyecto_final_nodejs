
import { saveProduct, deleteProduct, getAllProducts, getProductById } from "../models/products.model.js";

export const productsService = {
    addProduct: async (product) => {
        return(
            new Promise(async (res, rej) => {
                try{
                    const newProduct = await saveProduct(product);
                    res(newProduct);
                } catch(e) {
                    rej(e);
                };
            })
        )
    },

    deleteProduct: async (id) => {
        return(
            new Promise( async (res, rej) => {
                try {
                    console.log(id)
                    await deleteProduct(id);
                    res('product deleted');
                } catch(e) {
                    rej(e)
                }
            })
        )
    },

    getAllProducts: async () => {
        return(
            new Promise(async (res, rej) => {
                try {
                    const products = await getAllProducts();
                    res(products);
                } catch(e) {
                    rej(e);
                };
            })
        )
    },

    getProductById: async(id) => {
        return( 
            new Promise(async (res, rej) => {
                try {
                    const product = await getProductById(id);
                    console.log(product)
                    res(product)
                } catch(e) {
                    rej(e)
                }
            })
        )
    }
}