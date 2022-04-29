export default async function(error, req,res, next) {
    console.log(error);
    const err = {
        statusCode: 500,
        msg: "Something went wrog, try again later"
    }

    if(error.name === 'ValidationError'){
        err.statusCode = 400;
        err.msg = Object.values(error.errors)   
                    .map((item) => item.message)
                    .join(', ');

        return res.status(err.statusCode).json({msg: err.msg});
    }

    if(error.code && error.code === 11000) {
        err.statusCode = 400;
        err.msg = `${Object.keys(error.keyValue)} field has to be unique`;
        return res.status(err.statusCode).json({msg: err.msg});
    }
     return res.status(err.statusCode).json({msg: error})
}