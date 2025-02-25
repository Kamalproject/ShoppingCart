
function validateForm(){

    var name=document.getElementById("name").value;
    var password=document.getElementById("pass").value;
    var confpass=document.getElementById("confpass").value;
    var phonenumber=document.getElementById("number").value;
    var email=document.getElementById("email").value;
    var gender=document.getElementById("gender").value;

    if(name=="" || password=="" || confpass=="" || phonenumber=="" || email=="" ||  gender==""){
        alert ("Please fill the all  the field");
        return false;
    }
    if(!isNaN(name)){
        alert ("Name should be in text Format");
        return false;
    }

    if(password!=confpass){
        alert ("Password and Confirm Should be Same");
        return false;
    }
    else{
        return true;
    }
}


const express=require('express')
const mongoose=require('mongoose')
const path=require('path')
const port=3019

const app=express();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

//this part is coonect with MongoDb

mongoose.connect('mongodb://127.0.0.1:27017/Studentdata')
const db=mongoose.connection
db.once('open',()=>{
    console.log("Connection Successfully")
})

const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:String
})

const Users=mongoose.model("data", userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/post', async(req,res)=>{
    const {name, password,email}=req.body
    const user=new Users({
        name,
        password,
        email
    })
    await user.save()
    console.log(user)
    
    res.send("Successfully Register.Your Username is Your Email")

})



app.listen(port,()=>{
    console.log("Server stared")
})