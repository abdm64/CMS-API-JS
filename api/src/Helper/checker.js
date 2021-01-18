


exports.checkValue = (reqBody) =>{
if ( reqBody.msisdn === undefined || reqBody.partner=== undefined || reqBody.data === undefined || reqBody.transaction === undefined  ){


    return false
} else {

    return true
}


}