function formValidation() {

    var uid = document.getElementById('userid').value;
    var passid = document.getElementById('passid').value;
    var uname = document.getElementById('username').value;
    var uadd = document.getElementById('address').value;
    var ucountry = document.getElementById('country').value;
    var uzip = document.getElementById('zip').value;
    var uemail = document.getElementById('email').value;
    var umsex = document.getElementById('msex').value;
    var ufsex = document.getElementById('fsex').value;


    console.log("user uid $$ " + uid + " user uid $$ " + passid + "user uid $$" + uname + uadd + ucountry + uzip + uemail + umsex + ufsex);


    if (!uid) {
        alert("user id is null" + uid)
    }




    var table = document.getElementById("tbluser");

    var tr = document.createElement("tr");

    //1
    var td = document.createElement("td");
    var txt = document.createTextNode('1');
    td.appendChild(txt);
    tr.appendChild(td);

    //2
    var td = document.createElement("td");
    var txt = document.createTextNode(uid);
    td.appendChild(txt);
    tr.appendChild(td);

    //3
    var td = document.createElement("td");
    var txt = document.createTextNode(uemail);
    td.appendChild(txt);
    tr.appendChild(td);


    table.appendChild(tr);

    
    // var uid = document.getElementById('userid;
    // var passid = document.getElementById('passid;
    // var uname = document.getElementById('username;
    // var uadd = document.getElementById('address;
    // var ucountry = document.getElementById('country;
    // var uzip = document.getElementById('zip;
    // var uemail = document.getElementById('email;
    // var umsex = document.getElementById('msex;
    // var ufsex = document.getElementById('fsex;
    // if (userid_validation(uid, 2, 5)) {
    //     if (passid_validation(passid, 2, 5)) {
    //         if (allLetter(uname)) {
    //             if (alphanumeric(uadd)) {
    //                 if (countryselect(ucountry)) {
    //                     if (allnumeric(uzip)) {
    //                         if (ValidateEmail(uemail)) {
    //                             if (validsex(umsex, ufsex)) {}
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
    return false;
}

// function userid_validation(uid, mx, my) {
//     var uid_len = uid.value.length;
//     if (uid_len == 0 || uid_len >= my || uid_len < mx) {
//         alert("User Id should not be empty / length be between " + mx + " to " + my);
//         uid.focus();
//         return false;
//     }
//     return true;
// }

// function passid_validation(passid, mx, my) {
//     var passid_len = passid.value.length;
//     if (passid_len == 0 || passid_len >= my || passid_len < mx) {
//         alert("Password should not be empty / length be between " + mx + " to " + my);
//         passid.focus();
//         return false;
//     }
//     return true;
// }

// function allLetter(uname) {
//     var letters = /^[A-Za-z]+$/;
//     if (uname.value.match(letters)) {
//         return true;
//     } else {
//         alert('Username must have alphabet characters only');
//         uname.focus();
//         return false;
//     }
// }

// function alphanumeric(uadd) {
//     var letters = /^[0-9a-zA-Z]+$/;
//     if (uadd.value.match(letters)) {
//         return true;
//     } else {
//         alert('User address must have alphanumeric characters only');
//         uadd.focus();
//         return false;
//     }
// }

// function countryselect(ucountry) {
//     if (ucountry.value == "Default") {
//         alert('Select your country from the list');
//         ucountry.focus();
//         return false;
//     } else {
//         return true;
//     }
// }

// function allnumeric(uzip) {
//     var numbers = /^[0-9]+$/;
//     if (uzip.value.match(numbers)) {
//         return true;
//     } else {
//         alert('ZIP code must have numeric characters only');
//         uzip.focus();
//         return false;
//     }
// }

// function ValidateEmail(uemail) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (uemail.value.match(mailformat)) {
//         return true;
//     } else {
//         alert("You have entered an invalid email address!");
//         uemail.focus();
//         return false;
//     }
// }

// function validsex(umsex, ufsex) {
//     x = 0;

//     if (umsex.checked) {
//         x++;
//     }
//     if (ufsex.checked) {
//         x++;
//     }
//     if (x == 0) {
//         alert('Select Male/Female');
//         umsex.focus();
//         return false;
//     } else {
//         alert('Form Succesfully Submitted');
//         window.location.reload()
//         return true;
//     }
// }