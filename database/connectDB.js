const { Sequelize, DataTypes } = require('sequelize');

// For MySQL
// const connectDB = new Sequelize('wlbx', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql'
// });

// For PostgreSQL
const connectDB = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

//Test connect
connectDB.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// connectDB.sync().then(() => {  //{ force: true }
//     console.log("Drop and re-sync db.");  
// });

module.exports = {
    connectDB: connectDB,
    DataTypes: DataTypes
} ;
