import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
    // payload that we need to add
    // { userId }
    const token = jwt.sign({ userId} , process.env.JWT_SECRET, {
        expiresIn: '30d'
    });

    // save in a cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 2592000  // this only accepts seconds
    });
}

export default generateToken;