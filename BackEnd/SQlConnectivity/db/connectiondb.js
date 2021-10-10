const express=require('express');

var app = express();

app.get('/', function (req, res) {
   
    var sql = require("mssql/msnodesqlv8");

    // config for your database
    var config = {
        user: 'Yadav',
        password: 'Node',
        server: 'DESKTOP-FLVTAMD\\SQLEXPRESS', 
        database: 'Yadav' ,
        driver:'msnodesqlv8',
options:{
    trustedConnection:true
}
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from NodeTest', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});