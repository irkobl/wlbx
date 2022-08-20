const wlbx = require('../connectDB');
const Sequelize = require("sequelize");


const db = {};

db.Sequelize = Sequelize;
db.connectDB = wlbx.connectDB

db.user = require("./user.js"); 
db.blog = require("./blog.js"); 

db.user.hasMany(db.blog, {foreignKey: 'userID', as: 'blogs'});
db.blog.belongsTo(db.user, {foreignKey: 'userID', as: 'users'});

// db.user.hasMany(db.blog, { foreignKey: 'userID' });
// db.blog.belongsTo(db.user, { foreignKey: 'userI'});

module.exports = db;