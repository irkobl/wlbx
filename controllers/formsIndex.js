const connectDB = require ('../database/models/');
const iconv = require ('iconv-lite');
const stream = require ('stream');

exports.forms = async (req, res, next) => {

    //await connectDB.blog.destroy({ where:{}, truncate: true }); // dev чистим таблицу от мусора
    // await connectDB.blog.update({name: "tempora rem veritatis voluptas quo dolores vero"}, {
    //     where: {id: 41}
    // });

    const objBlogs = await connectDB.blog.findAll({ where: {userID: req.user.id} });
    
    console.log(objBlogs.length, typeof objBlogs);
            
    const jsonBlogs = new Object();
    objBlogs.forEach((dt) => {        
        jsonBlogs[dt.dataValues.id] = dt.dataValues; 
    });

    let string = JSON.stringify(jsonBlogs, function (key, value) {
        if (key == "message") {
            return value.replace(/\r\n\r\n/g, '<br>').replace(/\r\n/g, '&emsp;');
          } else {
            return value;
          }
    });

    const readBlogs = stream.Readable.from(string, {encoding: 'utf8'});     

    readBlogs.on('data', function(chunk) {                
        res.render('forms', {title: 'Forms', login: req.user.login, blogs: chunk});
    });
    readBlogs.on('end', function() {    
        res.end();
    });
    res.on ('close', function () {    
        readBlogs.destroy();    
    });    
    
};

exports.blog = async (req, res, next) => {
    let {input, text} = req.body;    
    let obj = {...req.files};
    let pathFile = '';    
    if (Object.keys(obj).length !== 0) { 
        iconv.skipDecodeWarning = true; //откючаем варнинги      
        pathFile = `${process.cwd()}/public/uploads/${iconv.decode(obj.file.name, 'UTF-8').toString()}`; // проблема с кирилицей в именах файлов
        obj.file.mv(pathFile, (err) => {
            if (err) {
                return res.status(500).json({message: `File is not downloaded ${error}`});
            }
        });
    }   
    
    await connectDB.blog.create({name: input, message: text, media: pathFile, userID: req.user.id, });
    
   
    return res.render('forms', {title: 'Forms', login: req.user.login});    
};

