// setTimeout(() => {
//     var head_1 = document.getElementById("head-1");
//     // head_1.innerHTML = "<i>Updated Head 1</i>";
//     // head_1.style.color = "blue";
//     // head_1.style.fontSize = "24px";
//     // head_1.classList.add("updated");
//     // var h2 = document.getElementsByClassName("updated");
//     // h2[0].innerHTML = "<i>Updated Head 1</i>";
// }, 5000);

// function countdown(){
// var m = parseInt(document.getElementById("min").value);
// var s = parseInt(document.getElementById("sec").value);
// const timer = setInterval(() => { 
    
//     if (s === 0 && m === 0) {
//         clearInterval(timer);
//         console.log('Time is up!');
//         return;
//     }
//     if (s <= 0) {
//         s = 59;
//         m--;
//     } else{
//         s--;
//     }
//     document.getElementById("min").value = m < 10 ? '0' + m : m;
//     document.getElementById("sec").value = s < 10 ? '0' + s : s;
    
// }, 1000);
// }

// lam 1 cai quat quay
var dg =0;
var speed = 0;
var decelarating = false;
setInterval(function() {
    dg += speed;
    var f = document.getElementById("fan");
    f.style.transform = `rotate(${dg}deg)`;
    if (dg >= 360) {
        dg = 0;
    }
    if (decelarating && speed > 0) {
        speed -= 0.1;
        if (speed <= 0) {
            speed = 0;
            decelarating = false;
        }
    }
    
},10);


function speed1(){
    speed = 5;
}
function speed2(){
    speed = 10;
}
function speed3(){
    speed = 25;
}
function off(){
    decelarating = true;
}

var input = document.getElementById("input");
var ts = document.getElementById("text-search");

function key1(){
    var v = input.value;
    ts.innerText = v;
}
function key2(){
    alert("Function key2 is called");
}
function key3(){
    alert("Function key3 is called");
}

