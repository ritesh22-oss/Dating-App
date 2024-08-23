document.getElementById('startButton').addEventListener('click', function() {
    document.querySelector('.start-screen').style.display = 'none';
    document.querySelector('.name-screen').style.display = 'block';
});

document.getElementById('submitNameButton').addEventListener('click', function() {
    const playerName = document.getElementById('nameInput').value;
    if (playerName) {
        startGame(playerName);
    } else {
        alert('Please enter your name!');
    }
});

let currentLevel = 1;
let currentQuestion = 0;
const totalLevels = 2; // Set this to the total number of levels you have
const questionsPerLevel = 10;
let playerName = "";

const levels = [
    {
        level: 1,
        questions: [
            { question: "What’s more important in a relationship", options: ["Passionate love", "Trust and respect"] },
            { question: "Would you rather have a partner who is", options: ["Extremely attractive but untrustworthy", "Less attractive but completely loyal"] },
            { question: "How do you prefer to spend your weekends with your partner", options: ["At a romantic getaway", "Just relaxing at home"] },
            { question: "What would you do if your partner forgot your anniversary?", options: ["Confront them immediately", "Let it slide and see if they remember later"] },
            { question: "How often should you check your partner’s phone", options: ["Never, it’s their privacy", "Occasionally, trust but verify"] },
            { question: "What matters most to you in a partner", options: ["Financial stability", "Emotional support"] },
            { question: "How do you handle arguments in a relationship", options: ["Talk it out immediately", "Give each other space and then discuss"] },
            { question: "What’s more important in a long-term relationship", options: ["Shared goals", "Physical attraction"] },
            { question: "Would you sacrifice your dream job for your partner", options: ["Yes, love is more important", "No, I need to follow my career"] },
            { question: "What would you do if you found out your partner had a secret", options: ["Confront them about it", "Wait for them to tell you on their own"] }
        ]
    },
    {
        level: 2,
        questions: [
            { question: "What’s more important on a first date", options: ["Chemistry and connection", "Appearance and first impressions"] },
            { question: "How often should you communicate with your partner daily", options: ["Constantly throughout the day", "Just a few meaningful conversations"] },
            { question: "Would you move to another city for your partner", options: ["Yes, love is worth it", "No, I prefer staying close to my roots"] },
            { question: "Which is more romantic?", options: ["A surprise dinner", "A heartfelt letter"] },
            { question: "What’s the best way to resolve conflicts", options: ["Talking it out calmly", "Giving each other space and time"] },
            { question: "Would you rather receive", options: ["A thoughtful gift", "A love letter"] },
            { question: "What’s your preferred way to show love", options: ["Physical touch", "Words of affirmation"] },
            { question: "What’s more important in a partner", options: ["Ambition", "Kindness"] },
            { question: "How important are shared hobbies", options: ["Very important", "Not necessary, as long as we support each other"] },
            { question: "What would you do if your partner asked for a break", options: ["Respect their space", "Try to talk things through immediately"] }
        ]
    }
];

function startGame(name) {
    playerName = name;
    document.querySelector('.name-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    document.getElementById('levelTitle').textContent = `Level ${currentLevel}`;
    loadQuestion();
}

function loadQuestion() {
    const currentLevelData = levels[currentLevel - 1];
    const questionData = currentLevelData.questions[currentQuestion];
    
    const questionText = document.getElementById('question');
    const options = document.querySelectorAll('.optionButton');

    // Include the player's name in the question
    questionText.textContent = `${questionData.question} ${playerName} ?`;
    options[0].textContent = questionData.options[0];
    options[1].textContent = questionData.options[1];

    options.forEach(option => {
        option.addEventListener('click', function() {
            nextQuestion();
        });
    });
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questionsPerLevel) {
        loadQuestion();
    } else if (currentLevel < totalLevels) {
        document.querySelector('.game-screen').style.display = 'none';
        document.querySelector('.level-completed-screen').style.display = 'block';
    } else {
        document.querySelector('.game-screen').style.display = 'none';
        document.querySelector('.personalized-question-screen').style.display = 'block';
        document.getElementById('playerName').textContent = playerName;
    }
}

document.getElementById('nextLevelButton').addEventListener('click', function() {
    currentLevel++;
    currentQuestion = 0;
    document.querySelector('.level-completed-screen').style.display = 'none';
    document.querySelector('.game-screen').style.display = 'block';
    document.getElementById('levelTitle').textContent = `Level ${currentLevel}`;
    loadQuestion();
});

document.getElementById('restartButton').addEventListener('click', function() {
    location.reload();
});

document.getElementById('restartGameButton').addEventListener('click', function() {
    location.reload();
});
