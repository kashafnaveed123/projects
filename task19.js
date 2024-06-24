
let container = document.querySelector(".container");
let circle = document.querySelector(".circle");
let morning = document.querySelector(".morning");
 val=1;
 circle.addEventListener("click", () => {
 if (val==1) {
        circle.classList.add('circle1');
        circle.classList.remove('circle');
        morning.classList.add('night');
        morning.classList.remove('morning');
        document.querySelector("body").classList.add("blue");
        document.querySelectorAll("p").forEach(paragraph => {
            paragraph.style.color = "white";
        });
        val =0;
        }
    // console.log(val)
else{    
    document.querySelectorAll("p").forEach(paragraph => {
        paragraph.style.color = "black";
    });
        circle.classList.remove('circle1');
        circle.classList.add('circle');
        morning.classList.remove('night');
        morning.classList.add('morning');
        document.querySelector("body").classList.remove("blue");
val=1;
}
});


// let container = document.querySelector(".container");
// let circle = document.querySelector(".circle");
// let morning = document.querySelector(".morning");
// let val = 1;

// circle.addEventListener("click", () => {
//     if (val === 1) {
//         circle.classList.add('circle1');
//         circle.classList.remove('circle');
//         morning.classList.add('night');
//         morning.classList.remove('morning');
//         document.querySelector("body").classList.add("blue");
//         val = 0;
//     } else {
//         circle.classList.remove('circle1');
//         circle.classList.add('circle');
//         morning.classList.remove('night');
//         morning.classList.add('morning');
//         document.querySelector("body").classList.remove("blue");
//         val = 1;
//     }
// });
