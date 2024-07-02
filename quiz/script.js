let index=0;
let right=0;
let wrong=0;
let label= document.getElementsByTagName('label');
let btn=document.getElementsByTagName('button')[0]
let questionBox=document.getElementById('questionBox');
let inputOptions=document.querySelectorAll('.option')
let container=document.getElementsByClassName('container')[0]


const quizData=[{
     question: "Let's guess my birthday ",
     a: "19th Sep,1977 ",
     b: "19th Sep,1904",
     c:"19th Sep,2004",
     d:"Abhi paida hi nahi hui🙉",
     correct:"c"
},
{
    question:"My favourite color is ",
    a:"Mama jo deti han pehn leti hu😆",
    b:"Maroon",
    c:"Black",
    d:"Lavender",
    correct:"d"
},
{
    question:"My favourite food is ",
    a:"Lizard Biryani🦎",
    b:"Cockroach Biryani👀",
    c:"Chicken Biryani🐓",
    d:"All are correct🙃",
     correct:"c"
},
{
    question:"What I like the most",
    a:"Larrna",
    b:"Dimag khana",
    c:"Maarna",
    d:"Qatal krna🤖",
     correct:"b"
},
{
    question:"Which drink I like the most",
    a:"jame sheere",
    b:"Chai",
    c:"Khoon🧛‍♀️",
    d:"Mint Margerita",
     correct:"b"
}
    ] 

     //for end the quiz
     const endQuiz = () => {
        container.innerHTML = `
            <div class="row">
                <h2>Yeh hai marks...ache se dekho👀</h2>
                <h3>Marks: ${right} / ${total}</h3>
            </div>
        `;
    };
       let total=quizData.length 
    //=====loadQuestion==========
    
    const loadQuestion=()=>{   
        if(index>=total){
            return endQuiz();
        }
        let data=quizData[index]; 
        questionBox.innerText=`${index+1}) ${data.question}`;
        label[0].innerText=data.a;
        label[1].innerText=data.b;
        label[2].innerText=data.c;
        label[3].innerText=data.d;

        const reset=(()=>{
            inputOptions.forEach((input)=>{
               input.checked=false;
               label[input.value.charCodeAt(0)-97].style.color='black';
            })
        })
        reset();

    }
    //======submit btn
    btn.addEventListener('click',()=>{
        const getAns=()=>{
            let answer;
            inputOptions.forEach((input)=>{
                if(input.checked){
                     answer=input.value;
                }
            })
            return answer;
        }
        let data = quizData[index];
        let correctAnswer=data.correct;
        const selectedAnswer=getAns()
        if(!selectedAnswer){
            alert("Please select an option")
        }
        if(selectedAnswer===correctAnswer){
            right++;
            label[correctAnswer.charCodeAt(0)-97].style.color='green';
        }
        else{
            wrong++;
            label[selectedAnswer.charCodeAt(0)-97].style.color='red';
            label[correctAnswer.charCodeAt(0)-97].style.color='green';
        }
        setTimeout(() => {
            index++;
            loadQuestion();
        }, 2000);
    })
loadQuestion()
