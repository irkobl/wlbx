exports.forms = (req, res) => {
    res.render('forms', {title: 'Forms'});
};

exports.blog = (req, res) => {
    console.log(req.body);
};