
function timeDefiner() {
   var timer = document.getElementById("samaya");
   var time = new Date()
   timer.innerText = time   
}

setInterval(timeDefiner, 1000);
