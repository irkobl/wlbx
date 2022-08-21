const wlbx = require('../connectDB');

const blog = wlbx.connectDB.define('blogs', {
        
    name: {
        type: wlbx.DataTypes.STRING,
        allowNull: false        
    },

    message: {
        type: wlbx.DataTypes.TEXT,
        allowNull: false
    },
    
    media: {
        type: wlbx.DataTypes.STRING,
        allowNull: false        
    },    

    createdAt: wlbx.DataTypes.DATE,
    updatedAt: wlbx.DataTypes.DATE
    }, {    
        paranoid: true
    }
);

module.exports = blog;