const word=["Addition",  
"subtraction",
"Division",
"Multiplication"];
const randomIndex=Math.floor(Math.random()*word.length);
const randomWord=word[randomIndex];
const num1=Math.ceil(Math.random()* 10)
const num2=Math.ceil(Math.random()* 10)

const questionEl=document.getElementById("question");
const popEl=document.getElementById("pop")
const formEl=document.getElementById("form")
const scoreEl=document.getElementById("score")



questionEl.innerHTML=`what is ${num1} ${randomWord} ${num2} ?`

var correctAns;
switch(randomIndex){
    case 0:
        correctAns=num1+num2;
        
        break;
    case 1:
        correctAns=num1-num2;
        break;
    case 2:
        correctAns=num1/num2;
        break;
    case 3:
        correctAns=num1*num2;
        break;
    }
    
    let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreEl.innerText=`score: ${score}`


formEl.addEventListener("submit",()=>{
    const userAns=+popEl.value
    if(userAns==correctAns){
        score++;
        updatelocalStorage()
    }
    else{
        score--
        updatelocalStorage()
    }
});

function updatelocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}