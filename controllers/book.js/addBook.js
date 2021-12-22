const books = require('../../model/book');


class addBook{

    async add(req,res){
        try{
            const {bookTitle,description,price,author} = req.body;
            if(bookTitle && description && price){
                const newBook = new books({bookTitle,description,price,author});
                await newBook.save();
                res.json({is_success:true,message:"Book add successfully",newBook});
            }
            else return res.json({is_success:false,message:"Please provide book details"})
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new addBook();