const connectDB = require ('../database/models/');

const objForm = Object.create (
    {}, 
    {
        
    }
);

exports.forms = (res, req, next) => {
    req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});
};

exports.blog = async (res, req, next) => {
    let {input, text} = res.body;
    let obj = {...res.files};
    let fileName
    if (Object.keys(obj).length !== 0) {
        obj.file.mv(`/var/www/wlbx/public/uploads/${obj.file.name}`, (err) => {
            if (err) {
                return req.status(500).json({message: 'File is not downloaded'});
            }
        });
    }
    
    
    await connectDB.blog.create({name: input, message: text, media: `/var/www/wlbx/public/uploads/${obj.file.name}`, userID: res.user.id, });

    return req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});    
};