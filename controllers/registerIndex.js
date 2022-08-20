const validator = require('express-validator');
const connectDB = require ('../database/models/');
const bcrypt = require('bcrypt');

const newObject = Object.create (
    {
        makeObj: function (stringTitlePage, style, errorValid) { 
            if (errorValid != undefined) {
                var stringValid = ''; 
                for (let i = 0; errorValid.errors.length > i; i++) {                
                    if (errorValid.errors.length == 1) {
                        stringValid = `${errorValid.errors[i].msg}.`;
                    } else if (errorValid.errors.length > 1) {
                        stringValid += `${errorValid.errors[i].msg}. `;
                        if (errorValid.errors.length-1 == i) {                        
                            let str = stringValid.replace(/\s$/g, '');
                            stringValid = str;                       
                        }
                    }                                
                }                
            } else {
                return stringValid = '';
            }
            
            Object.defineProperties(this, {
                stringValidate: { value: stringValid, enumerable: true, writable: true },
                titlePage: { value: stringTitlePage, enumerable: true, writable: true },
                styleColorDanger: { value: style, enumerable: true, writable: true }
            });
        }
    },
    {                 
        objValidate: {            
            get () {
                return { title: this.titlePage, textDanger: this.styleColorDanger, errValid: this.stringValidate }
            }
        }
    }
);

exports.page = (req, res, next) => {    
    newObject.makeObj('Register', '');
    return res.render('register', { title:  newObject.objValidate.title });    
};

exports.reg = async (req, res) => {       

    try {        
        const {login, password} = req.body;                
            
        var result = validator.validationResult(req);
        if (result.errors.length != 0) {                
            newObject.makeObj('Register', 'text-danger', result);                
            return res.render('register', newObject.objValidate);
        } else {
            const userSearch = await connectDB.user.findOne({where: {login: login}});
            if (userSearch) {
                return res.status(400).json({message: 'The user already exists'});
            } else {
                await bcrypt.hash(password, 10).then(hashPassword => {                    
                    connectDB.user.create({login: login, password: hashPassword});                                    
                });                                
                return res.redirect('/');
            }            
        }                        
                
    } catch (error) {        
        return res.status(400).json({message: 'Registration error'});
    }    
};