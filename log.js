var flag=false;
var user=document.getElementById("username");
var pw=document.getElementById("password");

function validate(){

    if(user.value=="admin")
    {
        if(password.value=="12345")
        {
            return true;
        }
        else{
            error1.innerText="Invalid password";
            error1.style.color="red";
            error.innerText="Valid username";
            error.style.color="green";
        }
    }
    else{
        error.innerText="Invalid username";
        error.style.color="red";
    }
    return false;

}