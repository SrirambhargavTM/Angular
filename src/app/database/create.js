var express = require('express')
var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
})

connection.connect((error)=>{
    if(error)
        throw error
    console.log("Connected to MYSQL Database!!!")
    var createDbQery = "create database DbAssignment"
    connection.query(createDbQery, (error,success)=>{
        if(error)
            throw error
        console.log("DataBase creation successfull")        
    })
})