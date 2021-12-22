const books = require('../../model/book');


class deleteBook{

    async remove(req,res){
        try{
            const {id} = req.params;
            if(id){
                const remove = await books.find({ _id:id}).remove().exec();
                if(remove) return res.json({is_success:true,message:"Book removed successfully"})
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
module.exports = new deleteBook();