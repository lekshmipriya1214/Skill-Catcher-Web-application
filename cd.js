const quizData = [
    {
        question: "Does the compiler program translate the whole source code in one step?",
        a: "No",
        b: "Depends on the compiler",
        c: "Yes",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which of the following file is an output of the assembler?",
        a: "Program file",
        b: "Object file",
        c: "Data file",
        d: "Task file",
        correct: "b",
    },
    {
        question: "Parsing is categorized into how many types?",
        a: "Three type",
        b: "Four type",
        c: "Two type",
        d: "Five type",
        correct: "c",
    },
    {
        question: " Which tool is used for grouping of characters in tokens in the compiler?",
        a: "Parser",
        b: "Code Optimiser",
        c: "Code Generator",
        d: "Scanner",
        correct: "d",
    },
    {
        question: "Which computer program accepts the high-level language and converts it into assembly language?",
        a: "Interpreter",
        b: "Linker",
        c: "Compiler",
        d: "Assembler",
        correct: "c",
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
