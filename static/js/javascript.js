document.getElementById("btn").addEventListener("click", show);
let as = document.getElementById("pwd");
let randomstring;
function show() {
    as = document.forms[0].pwd.value;
    if (as == "") {
        document.getElementById("result").innerHTML = "";
    }
    else if (as == "4") {
        randomstring = Math.random().toString(36).slice(-parseInt(as));
        document.getElementById("result").value = randomstring;
    }
    else if (as == "6") {
        randomstring = Math.random().toString(36).slice(-parseInt(as));
        document.getElementById("result").value = randomstring;
    }
    else if (as == "8") {
        randomstring = Math.random().toString(36).slice(-parseInt(as));
        document.getElementById("result").value = randomstring;
    }
    else if (as == "10") {
        randomstring = Math.random().toString(36).slice(-parseInt(as));
        document.getElementById("result").value = randomstring;
    }
    else if (as == "12") {
        randomstring = Math.random().toString(36).slice(-parseInt(as));
        document.getElementById("result").value = randomstring;
    }
}


function copyFunction() {
    var copyPasswd = document.getElementById("result");
  
    /* Select the text field */
    copyPasswd.select();
    copyPasswd.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyPasswd.value);
  }