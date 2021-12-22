const books = require('../../model/book');


class getAllBook{

    async getBooks(req,res){
        try{
            let {page} = req.query;
            page = page-1;
            const limit = 5;
            const getAllbooks = await books.find().limit(limit).skip(limit*page)
            if(getAllbooks.length>0) return res.json({is_success:true,message:"Books with pagination",totalBooks:getAllbooks.length,Books:getAllbooks})
            else return res.json({is_success:false,message:"Books not found"})
        }
        catch(err){
            console.log(err)
            res.json({is_success:false,message:err})
        }
    }

}
module.exports = new getAllBook();