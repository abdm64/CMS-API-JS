require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config')
const app = express();
const port = process.env.EXTERNAL_PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set proper Headers on Backend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});




//ROUTES
app.get('/dte-cms/api',(req,res) =>{

  res.send('hello world')
})

app.use('/dte-cms/api/v1', require('./routes/partnerRoute'))




;(async () => {
  try {
    await db.sync(
      { force: false } //Reset db every time
    );
    console.log('database connected ...')
    app.listen(port,()=> {

      console.log("CMS API  listen on port:"+ port)
    }); //DEF in docker.compose.yml
  } catch (error) {
    console.log("err" + error);
  }
})();









//dmp_user:D#mP&S3r!2#4%@172.16.64.165:1433/tbl_trigger_history_dmp

