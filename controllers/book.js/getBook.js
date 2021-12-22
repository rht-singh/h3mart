const books = require('../../model/book');


class getBook{

    async getBook(req,res){
        try{
            const {id} = req.params;
            if(id){
                const getBook = await books.findById({_id:id});
                if(getBook) return res.json({is_success:true,message:"Book detalils",book:getBook});
                else return res.json({is_success:false,message:"Book not found"})
            }
            else return res.json({is_success:false,message:"Please provide book"})
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new getBook();