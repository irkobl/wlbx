exports.forms = (res, req, next) => {
    req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});
};

exports.blog = (res, req, next) => {    
    let obj = {...res.files};
    obj.file.mv(`/var/www/wlbx/public/uploads/${obj.file.name}`, (err) => {
        if (err) {
            return req.status(500).json({message: 'File is not downloaded'});
        }
    });    
    return req.render('forms', {title: 'Forms', test: 'test', login: res.user.login});    
};