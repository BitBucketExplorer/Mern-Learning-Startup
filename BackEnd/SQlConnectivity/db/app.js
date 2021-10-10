const sql=require('mssql/msnodesqlv8');
// database configuuration

var a='767684';
var b='Tata';
var c=37;
var config={
    user:'Yadav',
    password:'Node',
    database:'Yadav',
    server:"DESKTOP-FLVTAMD\\SQLEXPRESS",
    driver:'msnodesqlv8',
    options:{
        trustedConnetion:true
    }



};
//connect ot database

sql.connect(config,function(err,res){
    if(err){
        console.log(err);
    }
    //Create the Request Object
    if(res){
        console.log("database is connected success full");
    }
     var request=new sql.Request();
     request.query("insert into NodeTest(id,name,age) values('"+a+"','"+b+"','"+c+"')",function(err,recordSet){
         if(err){
             console.log(err);
         }else{
             console.log("Data iserted Successfully");
         }
     })

    //database query
})