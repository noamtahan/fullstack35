function nextStepForm() {
    var x = document.getElementById("sel1").value;
    console.log(x);    
    if(x == 1) {  // circle
        document.getElementById("submit").style.display = "block";
        document.getElementById("justOnCirShow").style.display = "block";
        document.getElementById("justOnRecShow").style.display = "none";
    } else if(x== 2 ) {
        document.getElementById("submit").style.display = "block";
        document.getElementById("justOnCirShow").style.display = "none";
        document.getElementById("justOnRecShow").style.display = "block";        
    } else {
        document.getElementById("submit").style.display = "none";
        document.getElementById("justOnCirShow").style.display = "none";
        document.getElementById("justOnRecShow").style.display = "none";
    }
  }

  function drawFormInfo() {
    var xZela, yZela, radius; 
    var x = document.getElementById("sel1").value;
    console.log(x);
    var c = document.getElementById("canZel");
    var ctx = c.getContext("2d");
    
    if(x == 1) {  // circle
        radius = document.getElementById("rad").value;
        ctx.beginPath();
        ctx.arc(95, 50, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else if(x== 2 ) {
        xZela = document.getElementById("xZela").value;
        yZela = document.getElementById("yZela").value;
        ctx.rect(50,50, xZela, yZela);
        ctx.stroke();
    } else {
    }

  }