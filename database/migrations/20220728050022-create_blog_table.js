'use strict';
const wlbx = require('../connectDB');
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('blog', {
        
      message: {
          type: wlbx.DataTypes.TEXT,
          allowNull: false
      },
      
      media: {
          type: wlbx.DataTypes.STRING,
          allowNull: false        
      },
  
      user: {
          type: wlbx.DataTypes.STRING,
          allowNull: false        
      },
  
      createdAt: wlbx.connectDB.DATE,
      updatedAt: wlbx.connectDB.DATE
      }, {    
          paranoid: true
      });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('blog');
  }
};