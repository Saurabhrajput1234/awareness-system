function validateForm() {
    var returnval = true;
    var name = document.forms["myForm"]["fname"].value;
    if (name.length<6){
      alert("Name is too short");
      returnval = false;
    }
    var email = document.forms["myForm"]["femail"].value;
    if (email.length > 20) {
      alert("Email length is too long");
      returnval = false;
    }
    var cpass = document.forms["myForm"]["fcpass"].value;
    var password = document.forms["myForm"]["fpass"].value;
    if (cpass != password) {
      alert("*Password anfd confirm password doesnt match ");
      returnval = false;
    }
    return returnval;
  }