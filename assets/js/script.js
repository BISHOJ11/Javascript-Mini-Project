
// This code make bubble in our game


var timer = 60;
var score = 0;
var hitrn = 0;


function makeBubble(){
    var clutter = ""; // Declaring clutter name variable 


//  Creating a for loop  where the operation div bubbles runs 168 times 
//  again creating another var rn using Math mathods for converting their deciman number into single number 

for(var i = 1; i<=168; i++) 
    {   
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();



function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitvalue").textContent = hitrn;
    
}
getNewHit();





function runTimer(){
var timeint = setInterval(function (){
    if (timer > 0)
    {
        timer--;
        document.querySelector("#timervalue").textContent = timer;
    }
    else {
        clearInterval(timeint);
        document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER 🙈🙈 </h1>`
    }
    }, 1000)
}
runTimer();


function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;

}
increaseScore(); 


document.querySelector("#pbtm").addEventListener("click", function (dets){
    var  clickednum = Number(dets.target.textContent);
if (clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
}
})