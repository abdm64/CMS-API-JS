const { Sequelize } = require('sequelize');




const host =  process.env.MSHOST 
const user =  process.env.MSUSER 
const pass =  process.env.MSPASS 
const msdb = process.env.MSDB






module.exports = new Sequelize(
     msdb, 
     user , 
     pass , {
    host: host ,
    dialect:  'mssql' ,
    dialectOptions: {
        options: {
            encrypt: true,
            
        }
        
        
    },
    logging: false
  });

  