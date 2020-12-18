let questions = document.querySelectorAll('.question')
document.querySelector(".subBtn").classList.toggle('invisible');
document.querySelector(".srtBtn").classList.toggle('invisible');

for (let i = 0; i < questions.length; i++) {
    questions[i].classList.add('invisible');
    questions[i].classList.toggle('question');
}
document.querySelector(".subBtn").classList.toggle('invisible');

function startQuiz() {
    document.querySelector(".text1").classList.add('invisible');
    document.querySelector(".nxtBtn").classList.toggle('invisible');
    document.querySelector(".backBtn").classList.toggle('invisible');
}

function sumbitQuiz() {
    let points = 0;
    let finalResult = "";
    let answers = document.querySelectorAll("input[type='radio']:checked");

    for (let i = 0; i < answers.length; i++) {
        points += parseInt(answers[i].value);
    }

    if (points < 1) {
        finalResult = "barely monkey, smh, you make monkee very sad ;(."
    }
    else {
        finalResult = "very monkee, sugoi desu, you make monkee jump happy!!"
    }

    document.querySelector(".percent-monkey").innerHTML = finalResult;

    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.toggle('question');
    }

    document.querySelector(".result").classList.toggle('invisible');
    document.querySelector(".subBtn").classList.toggle('invisible');
    document.querySelector(".resBtn").classList.toggle('invisible');
    
}

function resetQuiz() {
    document.querySelector(".result").classList.toggle('invisible');
    for (let i = 0; i < questions.length; i++) {
        questions[i].classList.toggle('question');
    }
    
    document.querySelector(".quiz").reset();
}