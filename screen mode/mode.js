
let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let body=document.querySelector("body");
let currentMode="light";
btn1.addEventListener("click", ()=>{
       currentMode="dark";
    document.querySelector("body").classList.add("black");
    document.querySelector("body").classList.remove("white");    
console.log(currentMode);
})

btn2.addEventListener("click", ()=>{
       currentMode="light"
    document.querySelector("body").classList.add("white");
    document.querySelector("body").classList.remove("black");
console.log(currentMode);
})