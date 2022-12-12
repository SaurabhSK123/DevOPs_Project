const express = require("express")
const mongoose = require('mongoose');
const mongo_url = "mongodb://mongo-test/mdb"
const User = require('./model/user.js')

var bodyParser = require('body-parser');
const { collection } = require("./model/user.js");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express();

app.use(express.static('public'));

mongoose.connect( mongo_url, (err) => {
  if (err) {
    console.log("Mongodb is not connected " , err);
  }
    else {
    console.log("Mongodb is conneted successfully ");
  }

})



// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded");
// })







app.listen(3000, () => {
  console.log("listening on 3000");
});

app.get('/', (req, res) => {
  console.log('connected');
  res.sendFile(__dirname +'/public/home.html')
})

app.get('/dashboard', (req, res) => {
  console.log('connected');
  res.sendFile(__dirname +'/public/dashboard.html')
})


app.post('/insert', jsonParser, function(req, res){
  // console.log(req)
  var employee_id = req.body.employee_id;
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;

  var data ={
      "employee_id" : employee_id,
      "name" : name,
      "email": email,
      "phone"  : phone
  }
   
  // console.log(User)

  User.create(data,function(err,collection){
       if (err) throw err;
        console.log("Record Inserted Successfully");
    });

  return res.redirect('success');
})

app.get("/get_users", (req , res) => {
  
  User.find({},function(err,collection){
    res.send(collection)
  })
  
})

app.post("/delete", jsonParser, function(req , res) {
  var employee_id = req.body.employee_id;
  
  var del_data = { "employee_id" : employee_id }



  // console.log(del_data);
  
  // Delete qurey 
  User.deleteOne(del_data,function(err,collection){
    if(err) throw err
    res.send("sucess")
  })


})
