
function pad(str, max) {
    str = str.toString();
    return str.length < max ? "0" + str : str;
    
    // if (str.length < max) {
    //     return "0" + str;
    // } else {
    //     return str
    // }
}


var local = new Date();
var Y = pad(local.getFullYear(), 4);
var m = pad(local.getMonth() + 1, 2);
var d = pad(local.getDate() + 1, 2);

document.getElementById("dateTask").value = `${Y}-${m}-${d}`;

// alert(`${Y}-${m}-${d}`); // alert(Y +"-" + m + "-" + d); 