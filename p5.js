let btn=document.querySelector("#btn");
let body=document.querySelector("body");
let currentMode="light";
btn.addEventListener("click", ()=>{
    if(currentMode=="light"){
       currentMode="dark";
    //    document.querySelector("body").style.backgroundColor="black";
   //  document.querySelector("body").classList.add("black");
   //  document.querySelector("body").classList.remove("white");
    // body.classList.add("black")
    // body.classList.remove("white")
   }
    else{
       currentMode="light"
    //  document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").classList.add("white");
    document.querySelector("body").classList.remove("black");
    // body.classList.add("white")
    // body.classList.remove("black");
    }
console.log(currentMode);
})