let questions = [
    {
        "question": "Welche Methode wird am häufigsten zur drahtlosen Übertragung von Daten in Computernetzwerken verwendet?",
        "answer_1": "Quantum Burst Transmission",
        "answer_2": "Hyperloop Data Transfer",
        "answer_3": "Wireless Fidelity (WLAN)",
        "answer_4": "Gravitational Wave Communication",
        "right_answer": 3
    },
    {
        "question": "Was ist ein häufig verwendetes Sicherheitsprotokoll für die Verschlüsselung von Internetverbindungen?",
        "answer_1": " Secure Socket Layer (SSL)",
        "answer_2": "Emoji Encryption Protocol (EEP)",
        "answer_3": "Transport Layer Shuffling (TLS)",
        "answer_4": "Quantum Holographic Encryption",
        "right_answer": 1
    },
    {
        "question": "Welches Betriebssystem ist bekannt für seine Verwendung in Supercomputern und Hochleistungsrechnern?",
        "answer_1": "Quantum Nexus OS",
        "answer_2": "Solar Flare OS",
        "answer_3": "MegaByte Operating System (MBOS)",
        "answer_4": " Linux",
        "right_answer": 4
    },
    {
        "question": "Was bezeichnet den Prozess der Umwandlung von menschenlesbarem Text in einen verschlüsselten Code?",
        "answer_1": "Cryptocurrency Encoding",
        "answer_2": "Encryption",
        "answer_3": "Quantum Linguistic Transformation (QLT)",
        "answer_4": "Data Alchemy",
        "right_answer": 2
    },
    {
        "question": "Welche Art von Angriff nutzt oft gefälschte E-Mails, um Informationen abzufangen oder Malware zu verbreiten?",
        "answer_1": "Snail Mail Spoofing",
        "answer_2": "Email Hijacking",
        "answer_3": "Phishing",
        "answer_4": "Quantum Mail Encryption (QME)",
        "right_answer": 3
    },
];

let currentQuestion = 0;
let result = [];

function generateCardHtml() {    // Generates HTML
    let question = questions[currentQuestion];
    return /*html*/`


        <h5 class="card-title">${question['question']}</h5>
        <div id="answer_1" class="card mb-2 answer" onclick="answer('answer_1')">
          <div class="card-body">
          ${question['answer_1']}
          </div>
        </div>
        <div id="answer_2" class="card mb-2 answer" onclick="answer('answer_2')">
          <div class="card-body">
          ${question['answer_2']}
          </div>
        </div>
        <div id="answer_3" class="card mb-2 answer" onclick="answer('answer_3')">
          <div class="card-body">
          ${question['answer_3']}
          </div>
        </div>
        <div id="answer_4" class="card mb-2 answer" onclick="answer('answer_4')">
          <div class="card-body">
          ${question['answer_4']}
          </div>
        </div>
        <div class="question-footer">
          <div>
            <b id="question-number"></b> von <b>${questions.length}</b> Fragen
          </div>
          <button id="next-question-btn" disabled onclick="nextQuestion()" class="btn btn-secondary">Nächste Frage</button>
    `;
}

function renderCard() {                 // Renders the content of the quiz.
    if (currentQuestion >= questions.length) {
        document.getElementById('next-question-btn').innerHTML = 'Quiz Beenden';
        document.getElementById('end-screen').classList.remove('d-none');
        document.getElementById('card-body').classList.add('d-none');
    } else {
        let card = document.getElementById('card-body');
        card.innerHTML = generateCardHtml();
        document.getElementById('question-number').innerHTML = currentQuestion + 1;
    }

    showResult();
}

function showResult(){
    let sum = 0;
    for (let i = 0; i < result.length; i++ ) {
        sum += result[i];
    }

    document.getElementById('result').innerHTML = sum+'/5';
}

function restartQuiz(){     // Restarts the quiz, makes the array empty again.
    document.getElementById('end-screen').classList.add('d-none');
    document.getElementById('card-body').classList.remove('d-none');
    currentQuestion = 0;
    result = [];
    renderCard();
}

function showCurrentQuestionNumber() {   // Shows the actual question.
    let currentQuestion = 1;
    currentQuestion++;
}

function nextQuestion() {   // Jumps on the next question.
    currentQuestion++;
    renderCard();
    showCurrentQuestionNumber();
}

function answer(selection) {                        // Selects the answer, marks the right with green, and the false with red.
    let question = questions[currentQuestion]
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswer = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).classList.add('makecardgreen');
        document.getElementById('right').play();
        result.push(1);
    } else {
        document.getElementById(selection).classList.add('makecardred');
        document.getElementById(rightAnswer).classList.add('makecardgreen');
        document.getElementById('wrong').play();
    }
    document.getElementById('next-question-btn').disabled = false;
}

