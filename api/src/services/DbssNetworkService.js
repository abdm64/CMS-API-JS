

//@ts-check
const axiosOne = require('axios')
const errors = require('../Helper/error')
const https = require('https')
const axios = axiosOne.create({
    httpsAgent: new https.Agent({  
      rejectUnauthorized: false
    })
  });



'use strict';

   const  getDSubsInfo = async (reqdata) =>{
    
        
        const DBSS_API_SUBS = process.env.DBSS_API+'/api/v1/subscriptions/?filter%5Bmsisdn%5D='
        const filter = "filter%5Bstatus%5D=active&filter%5Bstatus%5D=dormant"
        const url =  `${DBSS_API_SUBS}213${reqdata.msisdn}&${filter}`
        let res = await axios.get(url)
        const dataChecker = res.data.data.length
        
    
    if (  dataChecker === 0){


      return null
    }





        let id = parseInt(res.data.data[0].id)
       
      
         const  emplyerCard =    await getSimCardType(id)
        

         
        
  
       
    return emplyerCard
      }

   
   const  getSimCardType = async (id) => {
    let dbssSimCardTypeUrl= buildUrl(id).simCardType
    let res = await axios.get(dbssSimCardTypeUrl) 

    
   

    return res.data.data.attributes.code 

      }


  const buildUrl = (id) =>{
        return  {
          
        balanceApi :  process.env.DBSS_API + `/api/v1/subscriptions/${id}/balances` ,
        simCardType : process.env.DBSS_API + `/api/v1/subscriptions/${id}/subscription-type`
        
        
        }
      }






module.exports = { getDSubsInfo }