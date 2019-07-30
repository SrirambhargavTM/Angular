var express = require('express')
var mysqldb = require('mysql')
var cors = require('cors')
var connection = mysqldb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'DbAssignment'
})
connection.connect((error) => {
    if (error)
        throw error
    console.log("Database connected successfully")
})

var expressApp = express()
expressApp.use(cors())
expressApp.get('/all', (request, response) => {
    var selectQuery = "select * from products"
    connection.query(selectQuery, (error, success) => {
        if (error)
            throw error
        response.send(JSON.stringify(success))
        console.log(JSON.stringify(success))
        console.log("records retrived successfully")
        response.end()
    })
})
expressApp.listen(1234)