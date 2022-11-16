function validateForm()
{
    var returnval=true;
    var email= document.forms["myForm"]["femail"].value;
    if (email.length >20)
    {
        alert("EMAIL LENGTH IS TOO LONG");
        returnval=false;
    }
    return returnval;

}