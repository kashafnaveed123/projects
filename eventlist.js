let btn=document.getElementById("btn1");
// btn.onclick=()=>{
//     console.log("I am on click")
// }
// btn.ondblclick=()=>{
//     console.log("I am double click")
// }
// btn.onmouseover=()=>{
//     console.log("I am mouseover")
// }
// btn.onmouseout=()=>{
//     console.log("I am mouseout")
// }
// btn.onclick=()=>{
//     alert("Please double click on a button")
// }
// btn.ondblclick=()=>{
//     console.log("I am double click")
// }
// Node.event=(e/evt/event)=>{
//     handler here
// }
// btn.onclick=(e)=>{
// console.log(e);
// }
// btn.onclick=(e)=>{
//     console.log(e.type);
//     }
// btn.onclick=(e)=>{
//     console.log(e.target);
//     }

// Node.addEventListener(event,callback){ handler here }
btn.addEventListener("click" , ()=>{
    console.log("I am handler 1")
})
btn.addEventListener("click" , ()=>{
    console.log("I am handler 2")
})
let handler3=()=>{
    console.log("I am handler 3")
}
btn.addEventListener("click" , handler3 )
btn.addEventListener("click" , ()=>{
    console.log("I am handler 4")
})
btn.removeEventListener("click" , handler3)