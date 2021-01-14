


exports.formatErr = (err) =>{
    let error = {}
    if (err.parent){
        error = {
            title : err.name,
            message : err.parent.message,
            type: err.parent.code,
            codeStatus : 500
        }

    } else {
        error = {
            title : err.name,
            message : err.errors[0].message,
            type : err.errors[0].type,
            codeStatus : 400
        }


    }




return error

}

exports.dbssIdErr =   {
    source: 'DBSS',
    statusCode : 400,
    Message : "Error performing the API call: Data empty! Subscriber ID can not be identified"
} 

