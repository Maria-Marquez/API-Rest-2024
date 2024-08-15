

const db = require('../config/db.config.js');
const Book = db.Book;

exports.create = (req, res) => {
    let book = {};

    try{
        // Building Customer object from upoading request's body
        book.name = req.body.name;
        book.editorial = req.body.address;
        book.autor = req.body.autor;
        book.genero = req.body.genero;
        book.pais_autor = req.body.pais_autor;
        book.no_pag = req.body.no_pag;
        book.ano_edicion = req.body.ano_edicion;
        book.precio = req.body.precio;
    
        // Save to MySQL database
        Book.create(book).then(result => {    
            // send uploading message to client
            res.status(200).json({
                message: "Upload Successfully a Book with id = " + result.id,
                customer: result,
            });
        });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

 
