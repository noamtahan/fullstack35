
function myForm() {
    console.log("ffff");
    var zela = document.getElementById("zela").value;
    var canWid = document.getElementById("canZel").width;
    var canHei = document.getElementById("canZel").height;
    document.getElementById("t").innerText = zela;
    var c = document.getElementById("canZel");
    var ctx = c.getContext("2d");
    // ctx.rect(20, 20, zela, zela);
    // ctx.stroke();


    console.log(canWid);
    console.log(canHei);

    var wtp = (canWid - zela) / 2;
    var htp = (canHei - zela) / 2;
    
    
    ctx.rect(wtp, htp, zela, zela);
    ctx.stroke();

    
    






}


function myForm1() {
    console.log("ffff");
    var zela = document.getElementById("zela").value;
    var canWid = document.getElementById("canZel").width;
    var canHei = document.getElementById("canZel").height;
    document.getElementById("t").innerText = zela;
    var c = document.getElementById("canZel");
    var ctx = c.getContext("2d");
    // ctx.rect(20, 20, zela, zela);
    // ctx.stroke();


    console.log(canWid);
    console.log(canHei);

    var wtp = (canWid - zela) / 2;
    var htp = (canHei - zela) / 2;
    
    var index = 0;

    setInterval(() => {
            index++;
            ctx.rect(wtp, htp, index, index);
            ctx.stroke();            
    
    }, 100);


    

    
    






}


