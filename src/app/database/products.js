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
    var multipleinsertQuery = "insert into products (Prod_name,Prod_desc,Prod_img) values ?"
    var records = [['Apple Lap','512GB RAM 64 GB HD,i10 proc,NavyBlue','Apple Lap.jpeg'],['Lenovo Lap','512 GB RAM,64 GB HD,WIN 7,i7 proc','lenovo.jpeg'],['Dell Lap','512 GB RAM,32 GB HD,WIN 7,i8 proc','Dell Lap.jpeg'],['Acer Lap','512 GB RAM,64 GB HD,WIN 7,i5 proc','acer.jpeg'],['Asus Lap','32 GB RAM,32 GB HD,WIN 7,i5 proc','asus.jpeg'],['Samsung Lap','32 GB RAM,64 GB HD,WIN 10,i7 proc','samsung.jpeg']]
    connection.query(multipleinsertQuery,[records], (error,success)=>{
        if(error)
            throw error
        console.log(success)  
        console.log("records inserted successfull")      
    })
})