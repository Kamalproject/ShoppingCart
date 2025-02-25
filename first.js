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