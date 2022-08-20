require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let token = req.headers.cookie.replace('token=', '');
        if (!token) {
            return res.status(403).json({error: 'User is not authorized'});
        };
        const userData = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.user = userData;
        next();
    } catch (err) {        
        return res.status(403).json({message: 'User is not authorized'});
    }; 
};


