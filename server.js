const express = require('express')
const app = express()
const bookRouter = require('./routers/book');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(bookRouter)

app.listen(8000, () => {
    console.log('Server ready!')
})