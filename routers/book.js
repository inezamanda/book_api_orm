const express = require('express')
const router = express.Router()
const bookController = require(`../controllers/bookController`)

router.get(`/books`, bookController.index)
router.get(`/books/:id`, bookController.showById)
router.post(`/books/add`, bookController.add)
router.put(`/books/:id`, bookController.edit)
router.delete(`/books/:id`, bookController.delete)

module.exports = router