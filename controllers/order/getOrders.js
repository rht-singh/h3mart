const order = require('../../model/purchase');


class getOrderDetails{

    async orderDetails(req,res){
        try{
            const {id} = req.query;
            if(id){
                const orderDetails = await order.findById({_id:id}).populate({path:'user_id',select:'Name phone'}).populate({path:'book_id',select:'bookTitle description author price'});
                if(orderDetails) return res.json({is_success:false,message:"order details",orderDetails:orderDetails});
                else return res.json({is_success:false,message:"Order not found"})
            }
            else return res.json({is_success:false,message:"Please Provide order id"})
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new getOrderDetails();