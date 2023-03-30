const quizData = [
    {
        question: " Which of the following is a type of computer architecture?",
        a: "Microarchitecture",
        b: " Harvard Architecture",
        c: "Von-Neumann Architecture",
        d: " All of the mentioned",
        correct: "d",
    },
    {
        question: "Which of the following is the subcategories of computer architecture?",
        a: "Microarchitecture",
        b: "Instruction set architecture",
        c: "Systems design",
        d: "All of the mentioned",
        correct: "a",
    },
    {
        question: "Who developed the basic architecture of computer?",
        a: "Blaise Pascal",
        b: "Charles Babbage",
        c: "John Von Neumann",
        d: "None of the above",
        correct: "c",
    },
    {
        question: ") Which of the following allows simultaneous write and read operations?",
        a: "ROM",
        b: "EROM",
        c: "RAM",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Which of the following operations is/are performed by the ALU?",
        a: "Data manipulation",
        b: "Exponential",
        c: "Square root",
        d: "All of the above",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
