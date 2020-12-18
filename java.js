let questions = document.querySelectorAll(".question");
document.querySelector(".srtBtn").classList.toggle("invisible");

let currentQuestion = 0;
let submitBtn = 0;

for (let i = 0; i < questions.length; i++) {
  questions[i].classList.add("invisible");
  questions[i].classList.toggle("question");
}

function startQuiz() {
  document.querySelector(".text1").classList.add("invisible");
  document.querySelector(".nxtBtn").classList.toggle("invisible");
  document.querySelector(".backBtn").classList.toggle("invisible");
  questions[0].classList.toggle("question");
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    questions[currentQuestion].classList.toggle("question");
    currentQuestion++;
    questions[currentQuestion].classList.toggle("question");
  }
  if (currentQuestion == questions.length - 1 && submitBtn == 0) {
    document.querySelector(".subBtn").classList.toggle("invisible");
    submitBtn++;
  }
}

function backQuestion() {
  if (currentQuestion > 0) {
    questions[currentQuestion].classList.toggle("question");
    currentQuestion--;
    questions[currentQuestion].classList.toggle("question");
  }
  if (currentQuestion != questions.length - 1 && submitBtn > 0) {
    document.querySelector(".subBtn").classList.toggle("invisible");
    submitBtn = 0;
  }
}

function sumbitQuiz() {
  let points = 0;
  let finalResult = "";
  let answers = document.querySelectorAll("input[type='radio']:checked");
  document.querySelector(".nxtBtn").classList.toggle("invisible");
  document.querySelector(".backBtn").classList.toggle("invisible");

  for (let i = 0; i < answers.length; i++) {
    points += parseInt(answers[i].value);
  }

  if (points <= 1) {
    finalResult = "0-10% monkee. You are barely monkey, smh, you make monkee very sad ;(.";
  } else if (points >= 2 && points <= 3) {
    finalResult = "40-60% monkee. You are human which is okee but you not monkee enough!";
  } else
    finalResult =
      "80-100% monkee, sugoi desu ne! You make monkee very jumpy happy! Have a banana!";

  document.querySelector(".percent-monkey").innerHTML = finalResult;
  questions[currentQuestion].classList.toggle("question");
  document.querySelector(".result").classList.toggle("invisible");
  document.querySelector(".subBtn").classList.toggle("invisible");
  document.querySelector(".resBtn").classList.toggle("invisible");
}

function resetQuiz() {
  document.querySelector(".result").classList.toggle("invisible");
  currentQuestion = 0;
  submitBtn = 0;
  document.querySelector(".resBtn").classList.toggle("invisible");
  document.querySelector(".nxtBtn").classList.toggle("invisible");
  document.querySelector(".backBtn").classList.toggle("invisible");
  questions[currentQuestion].classList.toggle("question");
  document.querySelector(".quiz").reset();
}
