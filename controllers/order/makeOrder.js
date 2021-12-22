const order = require('../../model/purchase');
const books = require('../../model/book');

class Order{

    async makeorder(req,res){
        try{
            const { book_id,user_id,total_books } = req.body;
            if(book_id && user_id && total_books){
                const book = await books.findById({_id:book_id});
                if(book){
                    const total_amount = Number(total_books) *Number(book.price);
                    const status = 'Pending'; 
                    const makeOrder = new order({book_id,user_id,status,total_amount,total_books});
                    await makeOrder.save();
                    if(makeOrder) return res.json({is_success:true,message:"Ordered successfully"})
                    else return res.json({is_success:false,message:"Order not made yet"})
                }
                else return res.json({is_success:false,message:"Book not found"})

            }
            else return res.json({is_success:false,message:"Please Provide creadentials"})
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new Order();