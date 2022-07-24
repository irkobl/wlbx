exports.page = (req, res, next) => {
    res.render('register', { title: 'Register' });    
};

exports.reg = (req, res) => {
    console.log(req.body.login);
    res.redirect('/');
};