
exports.index = (req, res, next) => {
    res.render('index', { title: 'Auth' });
};

exports.auth = (req, res) => {
    console.log(req.body);
    res.redirect('/');
    //res.render();    
};
