import questions from './questions.js';

let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let quizCompleted = false;

const questionCounter = document.getElementById('question-counter');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const quizContainer = document.getElementById('quiz');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const restartButton = document.getElementById('restart-btn');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    questionCounter.textContent = `Questão ${currentQuestion + 1} de ${questions.length}`;


    optionsElement.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsElement.appendChild(optionElement);
    });

    feedbackElement.className = 'feedback';
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
    selectedOption = null;

    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
}

function selectOption(e) {
    if (quizCompleted) return;

    const selectedElement = e.target;
    const optionIndex = parseInt(selectedElement.dataset.index);

    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });

    selectedElement.classList.add('selected');
    selectedOption = optionIndex;
    checkAnswer();
}

function checkAnswer() {
    if (selectedOption === null) return;

    const question = questions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // select correct answer
    options[question.answer].classList.add('correct');

    if (selectedOption === question.answer) {
        score++;
        feedbackElement.textContent = "Correto! 🎉";
        feedbackElement.classList.add('correct');
    } else {
        options[selectedOption].classList.add('wrong');
        feedbackElement.textContent = `Errado. A resposta correta é ${String.fromCharCode(65 + question.answer)}.`;
        feedbackElement.classList.add('wrong');
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCompleted = true;
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);
    scoreElement.textContent = `${score}/${questions.length}`;

    if (percentage >= 80) {
        messageElement.textContent = "Excelente! Você é um expert em neurociência! 🧠🌟";
    } else if (percentage >= 50) {
        messageElement.textContent = "Bom trabalho! Você sabe bastante sobre o cérebro! 👍";
    } else {
        messageElement.textContent = "Continue estudando! O cérebro é complexo mas fascinante! 📚";
    }

    progressBar.style.width = '100%';
}


function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quizCompleted = false;
    quizContainer.style.display = 'block';
    scoreContainer.style.display = 'none';
    loadQuestion();
}

// Event listeners
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// Start
loadQuestion();