let questions = document.querySelectorAll('.question')

for (let i = 0; i < questions.length; i++) {
    console.log(i)
    questions[i].classList.add('invisible');
}


function myFucktion() {
    console.log('Hej');
    console.log(questions.length);
    questions[1].classList.toggle('invisible');
    questions[1].classList.toggle('questions');
}