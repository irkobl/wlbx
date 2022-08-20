const wlbx = require('../connectDB');

const user = wlbx.connectDB.define('users', {
        
    login: {
        type: wlbx.DataTypes.STRING,
        allowNull: false
    },
    
    password: {
        type: wlbx.DataTypes.STRING,
        allowNull: false        
    },
    createdAt: wlbx.DataTypes.DATE,
    updatedAt: wlbx.DataTypes.DATE
    }, {
        
        paranoid: true,
        //tableName: 'users' параметр явно указывае название таблицы в mySQL
    }
);

module.exports = user;

