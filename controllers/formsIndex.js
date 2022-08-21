const connectDB = require ('../database/models/');


exports.forms = (res, req, next) => {
    req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});
};

exports.blog = async (res, req, next) => {
    let {input, text} = res.body;
    let obj = {...res.files};
    let pathFile = '';    
    if (Object.keys(obj).length !== 0) {
        console.log()
        pathFile = `${process.cwd()}/public/uploads/${obj.file.name}`; // /app/public/uploads/
        obj.file.mv(pathFile, (err) => {
            if (err) {
                return req.status(500).json({message: `File is not downloaded ${error}`});
            }
        });
    }   
    
    await connectDB.blog.create({name: input, message: text, media: pathFile, userID: res.user.id, });

    return req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});    
};