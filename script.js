const quizQuestions = [
    {
        question: "Do you think you're old?",
        options: ["Nope, age is just a number", "Yes, I'm practically a fossil"],
        answer: "Yes, I'm practically a fossil"
    },
    {
        question: "Guess Sarah's dream pet",
        options: ["Cat", "Pygmy Goat", "Horse", "Iguana"],
        answer: "Pygmy Goat"
    },
    {
        question: "Who has a habit of sending back the same video they received?",
        options: ["Fahmi", "Fahmi", "Fahmi", "Sarah"],
        answer: "Fahmi"
    },
    {
        question: "If you were given the chance to break your fast with someone special, who would you choose?",
        options: ["Hasbulla", "Mr. Super WoW", "Cristiano Ronaldo", "Sarah!!❀"],
        answer: "Sarah!!❀"
    },
    {
        question: "Sarah is a good friend",
        options: ["Absolutely!!!!!! :P", "NO"],
        answer: "Absolutely!!!!!! :P"
    }
];

let currentQuestionIndex = 0;

function displayQuizArea() {
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('playButton').style.display = 'none'; // Hide "Play Quiz" button
	document.getElementById('bye').style.display = 'none'; // Hide "Play Quiz" button
    displayQuestion();
}

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = quizQuestions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            displayBirthdayMessage();
            displayPlayAgainButton(); // Display "Play Again" button
        }
    } else {
        displayWrongMessage();
    }
}

function displayWrongMessage() {
    alert("Opps sorry, please try again :P");
}

function displayBirthdayMessage() {
    document.getElementById('quizArea').style.display = 'none';
    document.getElementById('messageArea').style.display = 'block';
document.getElementById('birthdayMessage').innerHTML = "Happy Birthday Fahmi!🙈<br>No wonder ur name ada Ramadhan hee now i know 😏<br> I wish you all the happiness in the world and may your life be filled with love & success, aminn!!🥰🤲<br>내 온라인 친구야, 생일 축하해! 🤟🏻♡<br> sidenote: first time kan i wish your birthday, i feel bad hahshsh so i make it extra 😭🤣";
}


function displayPlayAgainButton() {
    const playAgainButton = document.getElementById('playAgainButton');
    playAgainButton.style.display = 'block';
    // Add event listener here
    playAgainButton.addEventListener('click', () => {
        // Hide the message area
        document.getElementById('messageArea').style.display = 'none';
        currentQuestionIndex = 0;
        playAgainButton.style.display = 'none'; // Hide "Play Again" button
        displayQuizArea();
    });
}

document.getElementById('playButton').addEventListener('click', () => {
    displayQuizArea();
});

document.getElementById('playAgainButton').addEventListener('click', () => {
    currentQuestionIndex = 0;
    document.getElementById('playAgainButton').style.display = 'none'; // Hide "Play Again" button
    displayQuizArea();
});

