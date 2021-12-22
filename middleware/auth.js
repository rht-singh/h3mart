const jwt = require('jsonwebtoken');

const RouterGuard = async (req,res,next)=>{
    try{
        const authorization = req.get('authorization');
        if(authorization){
            const token = authorization.split(" ")[1];
            const verify = await jwt.verify(token,process.env.SECRET_KEY);
            if(verify){
                next();
            }
        }
        else return  res.json({is_success:false,message:'Unauthorized access'});
    }
    catch(err){
        console.log(err);
        res.json({is_success:false,message:'Unauthorized access'});
    }
} 

module.exports = RouterGuard;