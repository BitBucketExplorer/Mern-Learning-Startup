const sql=require('mssql/msnodesqlv8');


var config={
    user:'Yadav',
    password:'Node',
    database:'Yadav',
    server:'DESKTOP-FLVTAMD\\SQLEXPRESS',
    driver:'msnodesqlv8',
    options:{
        trustedConnection:true
    }
    
};

//
sql.connect(config,function(err,res){
    if(err){
        console.log(err);
    }
    if(res){
        console.log("connectd Suuc");
    }

    var request=new sql.Request();

    request.query("select * from NodeTest",(err,recordset)=>{
if(err){
    console.log(err);
}else{
    const tata=recordset;
    console.log(tata);
}
    })
})