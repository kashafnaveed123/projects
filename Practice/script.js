// let btn=document.getElementById("btn1");
// let div=document.querySelector("div")
// // btn1.onclick=()=>{
//     console.log("I am onclick");
// }
// btn.onmouseover=()=>{
//     console.log("I am mouse over")
// }
// div.onmouseover=()=>{
//     console.log("I am mouse over")
// }
// div.onmouseleave=()=>{
//     console.log("I am mouse in")
// }

// btn.onclick = (e) => {
//     console.log(e);
// };
// btn.onclick = (e) => {
//     console.log(e.type);
// };
// btn.onclick = (e) => {
//     console.log(e.clientX, e.clientY);
// };
// btn.onclick = (e) => {
//     console.log(e.target);
// };
// btn.addEventListener("click" , ()=>{
// console.log("Button is clicked--handler1")
// })
// btn.addEventListener("click" , ()=>{
//     console.log("Button is clicked--handler2")
// })
// let handler3=()=>{
//     console.log("Button is clicked--handler3")
//     }
// btn.addEventListener("click" ,handler3 )
//  btn.addEventListener("click" , ()=>{
//         console.log("Button is clicked--handler4")
//  })
//  btn.removeEventListener("click" , handler3)

let mode=document.querySelector("#btn")
let body=document.querySelector("body")
let currentMode="light";
btn.addEventListener("click" , ()=>{

    if(currentMode=="light"){
      currentMode="dark";
    //   document.querySelector("body").style.backgroundColor="black";
      document.querySelector("body").classList.add("black")
    // body.classList.add("black")
    // body.classList.remove("white")
    }
    else{
      currentMode="light";
    //   document.querySelector("body").style.backgroundColor="white";
    document.querySelector("body").classList.add("white");
    // body.classList.add("white");
    // body.classList.remove("dark")
    }
    console.log(currentMode)
})


