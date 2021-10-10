var express = require('express');
var router = express.Router();
var sql=require('mssql/msnodesqlv8');

var config={
  user:'Yadav',
  password:'Node',
  server:'DESKTOP-FLVTAMD\\SQLEXPRESS',
  database:'Yadav',
  driver:'msnodesqlv8',
  options:{
    trustedConnection:true
  }
}

sql.connect(config,function(err,res){
  if(err){
      console.log(err);
  }
  if(res){
      console.log("connectd Suuc");
  }

  var request=new sql.Request();

  request.query("select * from NodeTest",(err,res)=>{
if(err){
  console.log(err);
}else{
  console.log(res);
}
  })
});


var users=[
  {
    email:'abc@gmail.com',
    password:'1234'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Hello This is index Page");
});

router.post('/login',(req,res)=>{
let result=users.find(user=>user.email==req.body.email);
if(result){
  if(result.password==req.body.password){
    res.status(200).send({
      message:'Success Fully User is Valid'
    })
  }else{
    res.status(200).send({
      message:'Password is incorrect'
    })
  }
}else{
  res.status(200).send({
    message:'User Not Found'
  })
}
});



module.exports = router;
