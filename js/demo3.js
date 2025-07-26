// setTimeout(() => {
//     var head_1 = document.getElementById("head-1");
//     // head_1.innerHTML = "<i>Updated Head 1</i>";
//     // head_1.style.color = "blue";
//     // head_1.style.fontSize = "24px";
//     // head_1.classList.add("updated");
//     // var h2 = document.getElementsByClassName("updated");
//     // h2[0].innerHTML = "<i>Updated Head 1</i>";
// }, 5000);

function countdown(){
var m = parseInt(document.getElementById("min").value);
var s = parseInt(document.getElementById("sec").value);
const timer = setInterval(() => { 
    
    if (s === 0 && m === 0) {
        clearInterval(timer);
        console.log('Time is up!');
        return;
    }
    if (s <= 0) {
        s = 59;
        m--;
    } else{
        s--;
    }
    document.getElementById("min").value = m < 10 ? '0' + m : m;
    document.getElementById("sec").value = s < 10 ? '0' + s : s;
    
}, 1000);
}
var dg =0;
setInterval(function() {
    dg += 2;
    
    var f = document.getElementById("fan");
    f.style.transform = `rotate(${dg}deg)`;
    if (dg >= 360) {
        dg = 0;
    }
},2);