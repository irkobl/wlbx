const { Sequelize, DataTypes } = require('sequelize');

// For MySQL
// const connectDB = new Sequelize('wlbx', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// For PostgreSQL
// const connectDB = new Sequelize('d8ug3j66bcimmc', 'wnofasloisbizo', '9b914d69d5bee4bbc389c7f53cd78aa0c35241e4a3bb6c3293e291f1bdf3bdd7', {
//     host: 'ec2-34-225-159-178.compute-1.amazonaws.com',
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }
// });


const connectDB = new Sequelize('postgres://wnofasloisbizo:9b914d69d5bee4bbc389c7f53cd78aa0c35241e4a3bb6c3293e291f1bdf3bdd7@ec2-34-225-159-178.compute-1.amazonaws.com:5432/d8ug3j66bcimmc')

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
