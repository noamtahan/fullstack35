var d = new Date();
var fullYear = d.getFullYear();

document.getElementById('fullYear').innerText = fullYear + 1;


function timeDisplay(num) {
    if(num < 10) {
        num = "0" + num;   // 9 => 09 || 13 => 13
    } 
    return num;
}

function updateTime() {
    var time = new Date();
    var hour = timeDisplay(time.getHours());        
    var minutes = timeDisplay(time.getMinutes());       
    var seconds = timeDisplay(time.getSeconds()); 
    
    
    
    var output = hour + ":" + minutes + ":" + seconds;
    
    document.getElementById('time').innerText = output;
      
}