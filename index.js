import express from "express";
import {authenticator} from "./middleware/auth.js"
import authRoutes from "./src/routes/auth.route.js"
import productRoutes from "./src/routes/product.route.js"
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
     origin: ['http://localhost:5173', 'https://midominio.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  
    allowedHeaders: ['Content-Type', 'Authorization'],         
    exposedHeaders: ['Content-Length'],                         
    credentials: true,                                          
    maxAge: 600,                                                
    optionsSuccessStatus: 204
}

app.use(cors(corsConfig));

app.use(express.json());

app.use('/auth', authRoutes)
app.use('/api', authenticator, productRoutes)


app.use((req, res, next) => {
    res.status(404).send('Not Found: 404');
    next();
})

app.listen(PORT, () => {
    console.log(`Server running locally in localhost:${PORT}`)
})

