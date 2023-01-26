let form = document.getElementById("form");
let classes = (classes) => document.getElementsByClassName(classes);

//Code for password validation

var letters = /^[A-Za-z]+$/;
var email_val =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//other validations required code
let errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

function displayError(place,placeid,message){
    errorMsg[place].innerHTML = message;
    placeid.style.border = "2px solid red";   
    failureIcon[place].style.opacity = "1";
    successIcon[place].style.opacity = "0";
}

function displaySuccess(place,placeid){
    errorMsg[place].innerHTML = "";
    placeid.style.border = "2px solid green";   
    failureIcon[place].style.opacity = "0";
    successIcon[place].style.opacity = "1";
}



//empty data
function Create() {
  var n = document.getElementById("Username").value;
  var email = document.getElementById("Email").value;
  var p = document.getElementById("Password").value;
  var cp = document.getElementById("Pcheck").value;

  if (n == "" || email == "" || p == "" || cp == "") {
    displayError(0,Username,"Fill the boxes");
    displayError(1,Email,"Fill the boxes");
    displayError(2,Password,"Fill the boxes");
    displayError(3,Pcheck,"Fill the boxes");

 } else if (!letters.test(n)) {
    displayError(0,Username,"Name is incorrect must contain alphabets only");

  } else if (!email_val.test(email)) {
    displayError(1,Email,"Invalid email format please enter valid email id");
   
  } else if (p != cp) {
    displayError(2,Password,"Passwords not matching");
    displayError(3,Pcheck,"Passwords not matching");

  } else if (document.getElementById("Password").value.length > 12) {
    displayError(2,Password,"Password maximum length is 12");
    
  } else if (document.getElementById("Password").value.length < 6) {
    displayError(2,Password,"Password minimum length is 6");

  } else {
    displaySuccess(0,Username);
    displaySuccess(1,Email);
    displaySuccess(2,Password);
    displaySuccess(3,Pcheck);
    alert("Your account has been created successfully... ");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  Create();
});
