var mysql = require('mysql')
var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    pass : 'mysql@123'
});
con.connect(function(err){
   if (err) throw err;
    console.log('connected');
        con.query("create database data1",function(err,result){
            if(err) throw err;
            console.log('Database created');
        
        })
})