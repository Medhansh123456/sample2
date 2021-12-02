function login(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username=="medhansh"&&password=="medhansh@2008"){
        alert("login succesfull");
         window.open("home.html", "_self");
    }
    else{
      alert("username or password is incorrect")
    }

    if(username==""&&password==""){
    alert("username and password is required")
    }


   
}