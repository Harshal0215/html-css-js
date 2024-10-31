const body = document.querySelector("body");
body.addEventListener("mousemove",(x)=>{
const xpos = x.offsetX;
const ypos = x.offsetY;

const span1 = document.createElement("span");
body.appendChild(span1);
span1.style.left = xpos + "px";
span1.style.top = ypos + "px";
size = Math.random() * 100;
span1.style.width = size + "px";
span1.style.height = size + "px";
setTimeout(() => {
    span1.remove()
}, 3000);
})