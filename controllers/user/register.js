const users = require('../../model/user');
const jwt = require('jsonwebtoken');

class Register{
    
    async register(req,res){
        let {phone , name } = req.body;
        try{
            const user = await users.findOne({phone: phone});
            if(user){
                res.json({is_success:false,message:"User Already present"});
            }
            else{
                const token = await jwt.sign({name: name},process.env.SECRET_KEY);
                if(token){
                    const otp =Math.random()*100000>>0;
                    const User = new users({Name:name,phone,token,otp});
                    await User.save();
                    res.json({is_success:true,message:"User Register successfully",otp:`your otp is ${otp}`,token:`token is ${token}`})
                }
                else  res.json({is_success:false,message:"error"})
            }
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }
    

}

module.exports = new Register();
