'use strict';
const wlbx = require('../connectDB');
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('user', {
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
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('users');
  }
};