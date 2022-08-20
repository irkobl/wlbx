const { Sequelize, DataTypes } = require('sequelize');

const connectDB = new Sequelize('wlbx', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

//Test connect

const start = async () => {
    try {
        await connectDB.authenticate();        
        //console.log('Connection has been established successfully.');
    } catch (error) {
        //console.error('Unable to connect to the database:', error);
    }
};

start();

module.exports = {
    connectDB: connectDB,
    DataTypes: DataTypes
} ;
