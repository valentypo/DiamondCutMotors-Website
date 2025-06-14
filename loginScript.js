function validateData(){

    var name = document.getElementById("name").value;

    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var agreement = document.getElementById("agreement");

    if(name.length < 4){
        alert("Name must be at least 4 characters.")
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com.")
    }
    else if(phoneNumber.length != 12){
        alert("Phone number must be 12 letters.")
    }
    else if(checkAlphanumeric(password) === false){
        alert("Password must contain letter and characters.")
    }
    else if(password != confirmpassword){
        alert("Confirm password is not the same as password.")
    }
    else if(!agreement.checked){
        alert("To continue, please check the agreement.")
    }
    else{
        alert("Login Successfull!")
        alert("Returning to home...")
        window.location.href = "home.html";
    }
    
}

function checkAlphanumeric(password){
    var isAlphabet = false;
    var isNumber = false;

    for(var i = 0; i < password.length; i++){

        if(isNaN(password[i])){
            isAlphabet = true;
        }
        else{
            isNumber = true;
        }

        if(isAlphabet === true && isNumber === true){
            return true;
        }
    }

    return false;
}