function validateForm()
{
    returnval=true;
    var number= document.forms["myForm"]["fnumber"].value
    if (number.length>10)
    {
        alert("ENTER A CORRECT MOBILE NUMBER");
        returnval=false;
    }
    return returnval;
}