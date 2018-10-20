function validateForm()
{
    var name=document.forms["myForm"]["Name"].value;
    if(name=="")
    {
        alert("name must be filled out");
        return false;     
    }
    var emailid=document.forms["myForm"]["Emailid"].value;
    if(emailid=="")
    {
        alert("email id must be filled out");
        return false;  
    }
    var password=document.forms["myForm"]["password"].value;
    if(password=="")
    {
        alert("password must be filled out");
        return false;  
    }
    var phone number=document.forms["myForm"]["phone number"].value;
    if(phone number=="")
    {
        alert("phone number must be filled out");
        return false;  
    }
}