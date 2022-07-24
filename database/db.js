const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wlbx', 'user_wlbx', '#EDC3edc', {
    host: '185.219.43.43',
    dialect: 'mysql'
});


const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

start();