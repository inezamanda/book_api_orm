const { Book } = require(`../models`)

module.exports = {
    index : (req,res) => {
        Book.findAll()
        .then(books => {
            res.status(200).json(books)
        })
    },
    showById : (req,res) => {
        Book.findOne({
            where : { id: req.params.id }
        })
        .then(books => {
            res.status(200).json(books)
        })
    },
    add : (req,res) => {
        const { 
            isbn, 
            judul, 
            sinopsis, 
            penulis, 
            genre
        } = req.body
        Book.create({
            isbn : isbn,
            judul : judul,
            sinopsis : sinopsis,
            penulis : penulis,
            genre : genre
        })
        .then(books => {
            res.status(201).json(books)
        }) 
        .catch(err => {
            res.status(422).json({
                status: "failed",
                message: "Add book failed!"
            })
        })
    },
    edit : (req,res) => {
        const { 
            isbn, 
            judul, 
            sinopsis, 
            penulis, 
            genre
        } = req.body
        Book.update({
            isbn : isbn,
            judul : judul,
            sinopsis : sinopsis,
            penulis : penulis,
            genre : genre
        }, {
            where : { id : req.params.id }
        })
        .then(books => {
            res.status(201).json(books)
        })
        .catch(err => {
            res.status(422).json({
                status: "failed",
                message: "Edit book failed!"
            })
        })
    },
    delete : (req,res) => {
        Book.destroy({
            where : { id : req.params.id }
        })
        .then(() => {
            res.status(200).json({
                status: "success",
                message: "Delete book success!"
            })
        })
    }
}