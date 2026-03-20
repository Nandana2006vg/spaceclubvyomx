// Stars

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){
let star=document.createElement("div");
star.classList.add("star");

star.style.top=Math.random()*100+"vh";
star.style.left=Math.random()*100+"vw";

stars.appendChild(star);
}




window.addEventListener("scroll", ()=>{

document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});

});


// Button

const btn=document.querySelector(".btn");

btn.addEventListener("click", ()=>{
btn.innerText="Registered 🚀";
setTimeout(()=>{
btn.innerText="Register Now";
},2000);
});




const date=new Date("April 20, 2026 10:00:00").getTime();

setInterval(()=>{
const now=new Date().getTime();
const diff=date-now;

const d=Math.floor(diff/(1000*60*60*24));
const h=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
const m=Math.floor((diff%(1000*60*60))/(1000*60));
const s=Math.floor((diff%(1000*60))/1000);

document.getElementById("countdown").innerHTML=
d+"d "+h+"h "+m+"m "+s+"s";

},1000);