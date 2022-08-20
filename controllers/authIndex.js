
require('dotenv').config();
const connectDB = require ('../database/models/');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authObj = Object.create (
    {
        msgAuthCreate: function (msgUser) {            
            if (msgUser === null) {
               var text = 'No user exists.';                 
            } else if (msgUser === false) {
                var text = 'Invalid password';
            } else if (msgUser === undefined) {
                var text = undefined;
            }

            Object.defineProperties (this, {
                titleIndex: {value: 'Auth', enumerable: true, writable: true},
                textColor: {value: 'text-danger', enumerable: true, writable: true},
                textString: {value: text, enumerable: true, writable: true}
            });
        }
    }, 
    {
        msgAuth: {
            get () {
                return { title:  this.titleIndex, textDanger: this.textColor, msgString: this.textString };
            }
        }
    }
);


exports.index = (req, res, next) => {
    authObj.msgAuthCreate();
    res.render('index', authObj.msgAuth);
};

exports.auth = async (req, res) => {
    
    try { 
        const {login, password} = req.body;             
        const user = await connectDB.user.findOne({where: {login: login}});         
        if (user) {
            await bcrypt.compare(password, user.dataValues.password).then(result => {                
                if ( result ) {  
                    const token = jwt.sign({id: user.dataValues.id, login: user.dataValues.login, create: user.dataValues.cretedAt},
                        process.env.ACCESS_TOKEN,
                        {expiresIn: '1h'}                    
                    ); 
                    res.setHeader('Set-Cookie', `token=${token};HttpOnly;SameSite=strict;MAX-AGE=3602;path=/forms`); //Отправляем на клиент полученный токен
                    return res.redirect('/forms')
                    
                } else {
                    authObj.msgAuthCreate(result);
                    return res.render('index', authObj.msgAuth);
                }
            });
        } else {
            authObj.msgAuthCreate(user);
            return res.render('index', authObj.msgAuth);
        }
        
    } catch (error) {
        console.log (error);
        res.status(400).json({message: 'autorization error'});
    };
        
};
