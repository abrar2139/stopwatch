const stops = document.getElementById("stop");
const resets = document.getElementById("reset");
const starts = document.getElementById("start");
const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");
const milisecond = document.querySelector(".milisecond");
const digit = document.querySelectorAll(".digit");
let interval;
console.log(milisecond)
let hr = 0;
let min = 0;
let sec = 0;
let milisec = 0;
let watch = false;

function togglestopwatch() {
    if (!watch) {
        
        start()
    }else{
        stop()
    }
}
function start() {
    starts.innerHTML='<i class="fa fa-pause" style="font-size:36px;"></i>'

    watch = true
    stopwatch()
    for (let i = 0; i < digit.length; i++) {
    
        digit[i].style.animation=" none"

    }

}
function stop() {
    watch=false
    starts.innerHTML='<i class="fa fa-play" style="font-size:36px;"></i>'
    if (milisec!==0) {
        digit.forEach(dg=>{
            dg.style.animation=" blink-animation 0.5s infinite alternate"
           })   
    }  
}
function reset() {

    watch=false
    for (let i = 0; i < digit.length; i++) {
    
        digit[i].style.animation=" none"

    }
     hr = 0;
min = 0;
sec = 0;
 milisec = 0;
 hour.innerHTML="00:"
  minut.innerHTML="00:"
 second.innerHTML="00:"
  milisecond.innerHTML="00"
}
function stopwatch() {
    if (watch) {
    if (milisec==100) {
        sec=sec+1
        milisec=0
    }
    if (sec==60) {
        min=min+1
        sec=0
    }
    if (min==60) {
        hr=hr+1
        min=0
        sec=0
    }
    let hrstring =hr
    let minstring =min
    let secstring =sec
    let milisecstring =milisec
        if (hr<10) {
            hrstring = "0"+hrstring 
        }
        if (min<10) {
            minstring = "0"+minstring 
        }if (sec<10) {
            secstring = "0"+secstring
        }if (milisec<10) {
            milisecstring = "0"+milisecstring
        }
        milisec=milisec+1
        hour.innerHTML=hrstring+":"
        minut.innerHTML=minstring+":"
        second.innerHTML=secstring+":"
        milisecond.innerHTML=milisecstring
        setTimeout("stopwatch()", 10);
    }
}