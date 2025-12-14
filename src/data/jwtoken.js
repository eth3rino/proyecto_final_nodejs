import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET;

export const gen_token = (userdata) => {
    const user = {id: userdata.id, email: userdata.email};
    const expiration = { expiresIn: "1h"};

    return jwt.sign(user, secret_key, expiration);
}