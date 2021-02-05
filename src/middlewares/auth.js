const jwt = require('jsonwebtoken');
const config = require('config');

export default (req, res, next) => {
    const token = req.headers['x-access-token'];
    if(!token){
        return next();
    }

    jwt.verify(token, config.get('auth.key'), (err, decoded) => {
        req.decoded = decoded;
        next(err);
    });
};