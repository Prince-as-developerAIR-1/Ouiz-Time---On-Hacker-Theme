// my js code
const questions = [
    {q:"What is the capital of India?", a:["Mumbai","Delhi","Udaipur","Kolkata"], correct:1},
    {q:"Which is biggest planet?", a:["Earth","Mars","Jupiter","Venus"], correct:2},
    {q:"2 + 2 * 2 =?", a:["6","8","4","10"], correct:0},
    {q:"Who made this quiz?", a:["AI","You","15 year old boy","Teacher"], correct:2},
    {q:"HTML stands for?", a:["Hyper Text Markup Language","High Tech Modern Language","Hot Mail","None"], correct:0}
];

let curr = 0;
let score = 0;

function startQuiz(){
    curr=0; score=0;
    document.getElementById("result").style.display="none";
    showQ();
}

function showQ(){
    if(curr >= questions.length){
        endQuiz();
        return;
    }
    document.getElementById("question").innerText = questions[curr].q;
    document.getElementById("progress").innerText = `Question ${curr+1} of ${questions.length}`;
    document.getElementById("score").innerText = `score: ${score}`;

    let optDiv = document.getElementById("options");
    optDiv.innerHTML = "";
    questions[curr].a.forEach((opt, i)=>{
        let d = document.createElement("div");
        d.className="option";
        d.innerText=opt;
        d.onclick=()=> check(i, d);
        optDiv.appendChild(d);
    });
}

function check(i, div){
    let all = document.querySelectorAll(".option");
    if(i === questions[curr].correct){
        div.classList.add("correct");
        score++;
    } else {
        div.classList.add("wrong");
        all[questions[curr].correct].classList.add("correct");
    }
    // wait a bit then next
    setTimeout(()=>{
        curr++;
        showQ();
    }, 800);
}

function endQuiz(){
    document.getElementById("quiz-box").querySelector("#options").innerHTML="";
    document.getElementById("question").innerText="All done!";
    document.getElementById("result").style.display="block";
    document.getElementById("final-score").innerText=`You scored ${score} out of ${questions.length}`;
    let m = document.getElementById("msg");
    if(score==5) m.innerText="Legend! Full marks bro!";
    else if(score>=3) m.innerText="good job, not bad!";
    else m.innerText="keep trying, you can do better";
}

function restartQuiz(){
    document.getElementById("quiz-box").innerHTML=`
        <button onclick="startQuiz()">Start Quiz</button>
        <h2 id="question">Question goes here</h2>
        <div id="options"></div>
        <div id="info">
            <span id="progress">Question 1 of 5</span>
            <span id="score">score: 0</span>
        </div>`;
    startQuiz();
}

// auto start
startQuiz();