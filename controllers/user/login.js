const users = require('../../model/user');
const jwt = require('jsonwebtoken');

class Login{

    async login(req,res){
        try{
            const token = req.query.token
            if(token){
                const user = await users.findOne({token});
                if(user){
                    res.json({is_success:true,message:"Login successful"});
                }
                else return res.json({is_success:false,message:"Please register"});
            }
            else return res.json({is_success:false,message:"Please check your credentials or register"});
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new Login();