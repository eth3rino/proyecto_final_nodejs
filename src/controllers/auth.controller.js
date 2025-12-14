import { gen_token } from '../data/jwtoken.js';

export async function login(req, res) {
    console.log(req.body)
    const { email, password } = req.body;

    if (email === "test@gmail.com" && password === "123456") {
        const user = {email: email, id: "123"};
        const token = await gen_token(user);
        res.json({token});
    } else {
        res.sendStatus(401)
    }
}