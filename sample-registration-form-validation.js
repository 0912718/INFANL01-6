// function withoutValidation(){
//     alert("Your records were saved succesfully")
// }

function withValidation() {
    var uid = document.registration.userid;
    var passid = document.registration.passid;
    var uname = document.registration.username;
    var uadd = document.registration.address;
    var uzip = document.registration.zip;
    var uemail = document.registration.email;
    var count = 0;
    var eList = [];
    if (uid.value == "") {
        eList.push(uid.getAttribute("name").toString());
    }
    else {
        count += 1;
    }
    if (passid.value == "") {
        eList.push(passid.getAttribute("name").toString());
    }
    else {
        count += 1;
    }
    if (uname.value == "") {
        eList.push(uname.getAttribute("name").toString());
    }
    else {
        count += 1;
    }
    if (uadd.value == "") {
        eList.push(uadd.getAttribute("name").toString());
    }
    else {
        count += 1;
    }
    if (uzip.value == "") {
        eList.push(uzip.getAttribute("name").toString());
    }
    else {
        count += 1;
    }
    if (uemail.value == "") {
        eList.push(uemail.getAttribute("name").toString());
    }
    else {
        count += 1;
    }


    if (count < 6) {
        alert("We are missing: " + eList.toString());}

    else
        {
            if(checkInt(uname.value) == true){
            alert("No integer is allowed here");}
        }
}

function checkInt(x){
    return x.isNumber();
}

//     var list = [uid, passid, uname, uadd, uzip, uemail];
//     var emptyList = []
//
//     for(var item in list){
//
//         if(item.value == null){
//
//             emptyList.append(item);
//         }
//     }
// alert("We are missing : " + emptyList);
    //alert(document.registration.userid.getAttribute("name"));

//     if uid(){
//         console.log();
//     }
// }
//
// function formcheck() {
//     var fields = $(".ss-item-required")
//         .find("select, textarea, input").serializeArray();
//
//     $.each(fields, function(i, field) {
//         if (!field.value)
//             alert(field.name + ' is required');
//     });
//     console.log(fields);
// }
// } function userid_validation(uid,mx,my)
// {
// // var uid_len = uid.value.length;
// // if (uid_len == 0 || uid_len >= my || uid_len < mx)
// // {
// // alert("User Id should not be empty / length be between "+mx+" to "+my);
// // uid.focus();
// // return false;
// // }
// return true;
// }
// function passid_validation(passid,mx,my)
// {
// // var passid_len = passid.value.length;
// // if (passid_len == 0 ||passid_len >= my || passid_len < mx)
// // {
// // alert("Password should not be empty / length be between "+mx+" to "+my);
// // passid.focus();
// // return false;
// // }
// return true;
// }
//
// function allLetter(uname)
// { return true;
// // var letters = /^[A-Za-z]+$/;
// // if(uname.value.match(letters))
// // {
// // return true;
// // }
// // else
// // {
// // alert('Username must have alphabet characters only');
// // uname.focus();
// // return false;
// }
// }
// function alphanumeric(uadd)
// { return true;
// // var letters = /^[0-9a-zA-Z]+$/;
// // if(uadd.value.match(letters))
// // {
// // return true;
// // }
// // else
// // {
// // alert('User address must have alphanumeric characters only');
// // uadd.focus();
// // return false;
// }
// }
//
// }
// function allnumeric(uzip)
// { return true;
// // var numbers = /^[0-9]+$/;
// // if(uzip.value.match(numbers))
// // {
// // return true;
// // }
// // else
// // {
// // alert('ZIP code must have numeric characters only');
// // uzip.focus();
// // return false;
// }
// }
// function ValidateEmail(uemail)
// { return true;
// // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// // if(uemail.value.match(mailformat))
// // {
// // return true;
// // }
// // else
// // {
// // alert("You have entered an invalid email address!");
// // return false;
// }
// var uid = document.registration.userid;
// var passid = document.registration.passid;
// var uname = document.registration.username;
// var uadd = document.registration.address;
// var uzip = document.registration.zip;
// var uemail = document.registration.email;
// if(userid_validation(uid,5,12))
// {
// if(passid_validation(passid,7,12))
// {
// if(allLetter(uname))
// {
// if(alphanumeric(uadd))
// {
// if(allnumeric(uzip))
// {
// if(ValidateEmail(uemail))
// {
// }
// }
// }
// }
// }
// }
// alert("OK");
// return false;
//
//
// }
