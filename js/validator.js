function validateLog () {
    var usernameV = document.getElementById("logUser").value;
    var passwordV = document.getElementById("logPass").value;
    var username = document.getElementById("logUser");
    var password = document.getElementById("logPass");
    var passes = true;


//Username

    if (usernameV === "") {
        document.getElementById('logUserError1').innerHTML = "Username is required! ";
        username.style.border = "1px solid red";
        passes = false;
    }
    if (usernameV.indexOf(" ") !== -1) {
        document.getElementById('logUserError2').innerHTML = "Username cannot contain spaces! ";
        username.style.border = "1px solid red";
        passes = false;
    }
    

//PASSWORD

    if (passwordV === "") {
        document.getElementById('logPassError1').innerHTML = "Username is required! ";
        password.style.border = "1px solid red";
        passes = false;
}
    if (passwordV.indexOf(" ") !== -1) {  
        document.getElementById('logPassError2').innerHTML = "Username cannot contain spaces! ";
        password.style.border = "1px solid red";
        passes = false;
}
    if (passwordV.length > 12 || passwordV.length < 6) { 
        document.getElementById('logPassError3').innerHTML = "Password must be 6 to 12 characters long! ";
        password.style.border = "1px solid red";
        passes = false;
}

return passes;
}

//REGISTER
function validateReg() {
    var name = document.getElementById("name");
    var lname = document.getElementById("lname");
    var phone = document.getElementById("phone");
    var username = document.getElementById("regUser");
    var email = document.getElementById("email");
    var pass = document.getElementById("regPass");

    var nameV = document.getElementById("name").value;
    var lnameV = document.getElementById("lname").value;
    var phoneV = document.getElementById("phone").value;
    var usernameV = document.getElementById("regUser").value;
    var emailV = document.getElementById("email").value;
    var passV = document.getElementById("regPass").value;

    var passes = true;

    //NAME
    
    if (nameV === ""){
        document.getElementById('regNameError1').innerHTML = "Name is required! ";
        name.style.border = "1px solid red";
        passes = false;
      }
    if (nameV.indexOf(" ") !== -1){
        document.getElementById("regNameError2").innerHTML = "Name cannot contain spaces! ";
        name.style.border = "1px solid red";
        passes = false;
      }
    if (nameV.match(/[a-z]/i)) { 
    }else {
        document.getElementById("regNameError3").innerHTML = "Name must be only alphabets";
        phone.style.border = "1px solid red";
        passes = false;
    }
      
    //LAST NAME  
      
    if (lnameV === "") {
        document.getElementById("regLnameError1").innerHTML = "Last Name is required! ";
        lname.style.border = "1px solid red";
        passes = false;
    }
    if (lnameV.indexOf(" ") !== -1){
        document.getElementById("regLnameError2").innerHTML = "Last Name cannot contain spaces! ";
        lname.style.border = "1px solid red";
        passes = false;
    }
    if (lnameV.match(/[a-z]/i)) { 
    }else {
        document.getElementById("regLnameError3").innerHTML = "Last name must be only alphabets! ";
        lname.style.border = "1px solid red";
        passes = false;
    }
      
    //PHONE
    if (phoneV === ""){
        document.getElementById("regPhoneError1").innerHTML = "Phone number has to be just numbers!";
        phone.style.border = "1px solid red";
        passes = false;
    }      
    if (isNaN(phoneV)){
        document.getElementById("regPhoneError2").innerHTML = "Phone number has to be just numbers!";
        phone.style.border = "1px solid red";
        passes = false;
    }
     
    
    //USERNAME 

    if (usernameV === "") {
        document.getElementById("regUserError1").innerHTML = "Username is required! ";
        username.style.border = "1px solid red";
        passes = false;
    }
    if (usernameV.indexOf(" ") !== -1) {
        document.getElementById("regUserError2").innerHTML = "Username cannot contain spaces! ";
        username.style.border = "1px solid red";
        passes = false;
    }

    //EMAIL
      
    if (emailV === ""){
        document.getElementById("regEmailError1").innerHTML = "E-mail is required! ";
        email.style.border = "1px solid red";
        passes = false;
      }
    if (emailV.indexOf('@') === -1){
        document.getElementById("regEmailError2").innerHTML = "Not a valid E-mail! ";
        email.style.border = "1px solid red";
        passes = false;
      }
    if (emailV.indexOf(" ") !== -1){
        document.getElementById("regEmailError3").innerHTML = "E-mail must not contian spaces! ";
        email.style.border = "1px solid red";
        passes = false;
      }
    //   PASSWORD
    if (passV === "") {
        document.getElementById("regPassError1").innerHTML = "Password is required! ";
        pass.style.border = "1px solid red";
        passes = false;
    }
    if (passV.indexOf(" ") !== -1) {
        document.getElementById("regPassError2").innerHTML = "Password cannot contain spaces! ";
        pass.style.border = "1px solid red";
        passes = false;
    }
    if (passV.length > 12 || passV.length < 6) {
        document.getElementById("regPassError3").innerHTML = "Password must be 6 to 12 characters long! ";
        pass.style.border = "1px solid red";
        passes = false;
    }
      
    return passes;  

}