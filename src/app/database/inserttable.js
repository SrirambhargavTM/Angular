var mysqldb = require('mysql')
var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'DbAssignment'
})

connection.connect((error)=>{
    if(error)
        throw error
    var createtableQery = "create table products (id int(8) auto_increment PRIMARY KEY,Prod_name varchar(65), Prod_desc varchar(120),Prod_img varchar(65))"
    connection.query(createtableQery, (error,success)=>{
        if(error)
            throw error
        console.log("Table creation successfull")        
    })
})