function validateLog () {
    let username = document.getElementById("logUser").value;
    let pass = document.getElementById("logPass").value;

    logError = document.getElementById("logError");

//Username

    if (username === "") {
        logError.style.border = "1px solid red";
        logError.innerHTML = "Username is required! ";
        return false;
    }
    if (username.indexOf(" ") !== -1) {
        logError.style.border = "1px solid red";
        logError.innerHTML = "Username cannot contain spaces! ";
        return false;
    }
    

//PASSWORD

    if (pass === "") {
        logError.style.border = "1px solid red";
        logError.innerHTML = "Username is required! ";
        return false;
}
    if (pass.indexOf(" ") !== -1) {
        logError.style.border = "1px solid red";
        logError.innerHTML = "Username cannot contain spaces! ";
        return false;
}
    if (pass.length > 12 || pass.length < 6) {
        logError.style.border = "1px solid red";
        logError.innerHTML = "Password must be 6 to 12 characters long! ";
    return false;
}

return true;
}

//REGISTER
function validateReg() {
    let name = document.getElementById("name").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let username = document.getElementById("regUser").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("regPass").value;

    let regError = document.getElementById("regError");

    //NAME
    
    if (name === ""){
        regError.style.border = "1px solid red";
        regError.innerHTML = "Name is required! ";
        console.log('its working partially');
        return false;
      }
    if (name.indexOf(" ") !== -1){
        regError.style.border = "1px solid red";
        regError.innerHTML = "Name cannot contain spaces! ";
        return false;
      }
    if (name.match(/[a-z]/i)) { 
    }else {
      regError.innerHTML = "Name must be only alphabets";
      return false;
    }
      
    //LAST NAME  
      
    if (lname === "") {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Last Name is required! ";
        return false;
    }
    if (lname.indexOf(" ") !== -1){
        regError.style.border = "1px solid red";
        regError.innerHTML = "Last Name cannot contain spaces! ";
        return false;
    }
    if (lname.match(/[a-z]/i)) { 
    }else {
        regError.innerHTML = "Last name must be only alphabets";
        return false;
    }
      
    //PHONE
      
    if (isNaN(phone)){
        regError.style.border = "1px solid red";
        regError.innerHTML = "Phone number has to be just numbers!";
        return false;
    }  
    
    //USERNAME 

    if (username === "") {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Username is required! ";
        return false;
    }
    if (username.indexOf(" ") !== -1) {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Username cannot contain spaces! ";
        return false;
    }

    //EMAIL
      
    if (email === ""){
        regError.style.border = "1px solid red";
        regError.innerHTML = "E-mail is required! ";
        return false;
      }
    if (email.indexOf('@') === -1){
        regError.style.border = "1px solid red";
        regError.innerHTML = "Not a valid E-mail! ";
        return false;
      }
    if (email.indexOf(" ") !== -1){
        regError.style.border = "1px solid red";
        regError.innerHTML = "E-mail must not contian spaces! ";
        return false;
      }
    //   PASSWORD
    if (pass === "") {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Username is required! ";
        return false;
    }
    if (pass.indexOf(" ") !== -1) {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Password cannot contain spaces! ";
        return false;
    }
    if (pass.length > 12 || pass.length < 6) {
        regError.style.border = "1px solid red";
        regError.innerHTML = "Password must be 6 to 12 characters long! ";
        return false;
    }
      
    return true;  

}