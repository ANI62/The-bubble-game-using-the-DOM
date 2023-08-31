
function makeBubble(){
  var clutter="";
for (var i=1; i<=119; i++) {
  var rn=Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rn}</div>`;
  }
document.querySelector("#pbtm").innerHTML=clutter;

}
makeBubble();
var timer=60;
function runTimer(){
 var timer1= setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timerval").textContent=timer;}
    else{
      clearInterval(timer1);
      document.querySelector("#pbtm").innerHTML="<h2>Game Over Bro</h2>";
    }
  },1000);

}
runTimer();
var rn;
function hitValue(){
   rn=Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=rn;
}
hitValue();
var score=0;
function increaseScore(){
  score+=10;
  document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
  var clicknum=Number(dets.target.textContent);
  if(clicknum==rn){
    increaseScore();
    makeBubble(); 
    hitValue();
  }
});