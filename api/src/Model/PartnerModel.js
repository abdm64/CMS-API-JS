const {Sequelize, DataTypes} = require('sequelize');
const db = require('../config/db.config');

const Partner = db.define('Partner', {

  tabid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
 
    msisdn: {
    type: Sequelize.STRING,
    allowNull: false    
  },
  incomingTime: {
    type: DataTypes.DATEONLY,
    allowNull: false    
  },
  triggerId: {
    type: Sequelize.STRING,
    allowNull: false    
  },

  isProcessed: {
    type: Sequelize.INTEGER,
    allowNull: false    
  },

  triggerDescription: {
    type: Sequelize.STRING,
    allowNull: true  
  },
    
  AFK_TRIGGERID_MSISDN : {
    type: Sequelize.STRING,
    allowNull: true    
  },
  aggregateId : {
    type: Sequelize.STRING,
    allowNull: true    
  },

  notificationTime: {
    type: DataTypes.DATEONLY ,
    allowNull: true   
  },
 id: {
    type: Sequelize.STRING,
    allowNull: true,   
  },

  TRIGGER_ATTR_01: {
    type: Sequelize.STRING,
    allowNull: true   
  },
  
  TRIGGER_ATTR_02: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_03: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_04: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_05: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_06: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_07: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_08: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_09: {
    type: Sequelize.STRING,
    allowNull: true   
  },

  
  TRIGGER_ATTR_10: {
    type: Sequelize.STRING,
    allowNull: true   
  },


  





 // properites
//  freezeTableName: true,
//  
//  
 
 
 
}, {

  tableName: 'tbl_trigger_history_dmp',
  timestamps: false,
}

);

Partner.sync().then(() => {
  console.log('table created');
});
module.exports = Partner;