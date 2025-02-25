function validateForm(){
    var name=document.getElementById("name").value;
    var password=document.getElementById("pass").value;

    if(name=="" || password==""){
        alert("Please Fill all the Fields");
    }
}
