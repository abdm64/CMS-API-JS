


exports.checkValue = (reqBody) =>{
if ( reqBody.msisdn === undefined || reqBody.triggerId === undefined || reqBody.triggerDescription === undefined){


    return false
} else {

    return true
}


}