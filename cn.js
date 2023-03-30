const quizData = [
    {
        question: "Which of these is a standard interface for serial data transmission?",
        a: "ASCII",
        b: "RS232C",
        c: "2",
        d: "Centronics",
        correct: "b",
    },
    {
        question: "Which of the following transmission directions listed is not a legitimate channel?",
        a: "Simplex",
        b: "Half Duplex",
        c: "Double Duplex",
        d: "Full Duplex",
        correct: "c",
    },
    {
        question: "A collection of hyperlinked documents on the internet forms the ?",
        a: "World Wide Web (WWW)",
        b: "E-mail system",
        c: "Mailing list",
        d: "Hypertext markup language",
    
        correct: "a",
    },
    {
        question: "What kind of transmission medium is most appropriate to carry data in a computer network that is exposed to electrical interferences?",
        a: "Unshielded twisted pair",
        b: "Optical fiber",
        c: "Coaxial cable",
        d: "Microwave",
        correct: "B",
    },
    {
        question: "The term HTTP stands for?",
        a: "Hyper terminal tracing program",
        b: "Hypertext tracing protocol",
        c: "Hypertext transfer protocol",
        d: "Hypertext transfer program",
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
