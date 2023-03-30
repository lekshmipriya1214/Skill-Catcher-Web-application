const quizData = [
    {
        question: "Which of the following option leads to the portability and security of Java?",
        a: "Bytecode is executed by JVM",
        b: "The applet makes the Java code secure and portable",
        c: "Use of exception handling",
        d: "Dynamic binding between objects",
        correct: "a",
    },
    {
        question: " Which of the following is not a Java features?",
        a: "Dynamic",
        b: "Architecture Neutral",
        c: "Use of pointers",
        d: "Object-oriented",
        correct: "C",
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
        a: "Object",
        b: "Int",
        c: "Long",
        d: "Void",
        correct: "b",
    },
    {
        question: "In which process, a local variable has the same name as one of the instance variables?",
        a: "Serialization",
        b: "Variable Shadowing",
        c: "Abstraction",
        d: "Multi-threading",
        correct: "b",
    },
    {
        question: "What does the expression float a = 35 / 0 return?",
        a: "0",
        b: "Not a Number",
        c: "Infinity",
        d: "Run time exception",
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
