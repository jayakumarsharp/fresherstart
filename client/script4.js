function Form()                                    
{ 
    {var name = document.forms["myForm"]["Name"].value;               
    if (name== "")                                  
    { 
        window.alert("Please enter your name."); 
        return false; 
    } }
       {var address = document.forms["myForm"]["Address"].value;  
    if(address == "")                               
    { 
        window.alert("Please enter your address");
        return false; 
    } }
    {var email = document.forms["myForm"]["EMail"].value;           
    if (email == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        return false; 
    } 
   
    if (email.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address.");  
        return false; 
    } 
   
    if (email.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address.");  
        return false; 
    }} 
      { var phone = document.forms["myForm"]["phonenumber"].value;  
    if (phone== "")                           
    { 
        window.alert("Please enter your telephone number.");  
        return false; 
    } }
    {var password = document.forms["myForm"]["Password"].value;     
    if (password== "")                        
    { 
        window.alert("Please enter your password"); 
        return false; 
    }} 
    
    return true; 
}
  