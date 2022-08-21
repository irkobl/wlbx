require('dotenv').config();
const jwt = require('jsonwebtoken');
const connectDB = require('../database/models');

module.exports = async (req, res, next) => {
    try {
        let token = req.headers.cookie.replace('token=', '');        
        if (!token) {
            return res.status(403).json({error: 'User is not authorized'});
        };
        
        const userData = jwt.verify(token, process.env.ACCESS_TOKEN);        
        
        //Проверяем был ли удален user в момент работы
        let existUser = await connectDB.user.findOne({where: {id: userData.id}});
        if (existUser) {            
            req.user = userData;
        } else {
            return res.status(403).json({message: 'User does not exist'});
        };        

        next();
    } catch (err) {        
        return res.status(403).json({message: 'User is not authorized'});
    }; 
};


