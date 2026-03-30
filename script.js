let btn = document.getElementById("loveBtn");
let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");

let count = 0;
let size = 30;

btn.onclick = function(){

count++;
size += 20;

btn.style.fontSize = size + "px";

if(count == 5){

page1.style.display = "none";
page2.style.display = "block";

startHearts();

}

}

function startHearts(){

setInterval(()=>{

let heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000)

},300)

}