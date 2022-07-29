const wlbx = require('../connectDB');
const Sequelize = require("sequelize");

const db = {};

db.Sequelize = Sequelize;
db.connectDB = wlbx.connectDB

db.user = require("./user.js")(wlbx.connectDB, Sequelize);
db.blog = require("./blog.js")(wlbx.connectDB, Sequelize);

db.user.hasMany(db.blog);
db.blog.belongsTo(db.user, {
    foreignKey: {
        name: "userID",
        allowNull: false
    },

});

module.exports = db;