var score = 0;
var timerInterval;

// Function to start the quiz by showing questions
function showQuestions() {
  var startScreen = document.getElementById("start-screen");
  var questionsSection = document.getElementById("questions");

  startScreen.classList.add("hide");
  questionsSection.classList.remove("hide");

  startTimer();
  displayQuestion(0);
}

// Function to start the timer
function startTimer() {
  var timeElement = document.getElementById("time");
  var timeLeft = 5;

  timerInterval = setInterval(function () {
    timeElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

    timeLeft--;
  }, 1000);
}

// Function to display a question
function displayQuestion(index) {
  var questionTitle = document.getElementById("question-title");
  var choicesContainer = document.getElementById("choices");

  questionTitle.textContent = questionsArray[index].question;
  choicesContainer.innerHTML = "";

  questionsArray[index].choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;

    choiceButton.addEventListener("click", function () {
      localStorage.setItem(`question_${index}_choice`, choice);

      if (choice === questionsArray[index].correctAnswer) {
        score++;
      }

      index++;

      if (index < questionsArray.length) {
        displayQuestion(index);
      } else {
        clearInterval(timerInterval);
        endQuiz();
      }
    });

    choiceButton.classList.add("choice-button");
    choicesContainer.appendChild(choiceButton);
    choicesContainer.appendChild(document.createElement("br"));
  });
}

// Function to end the quiz and display results
function endQuiz() {
  displayResults();
  console.log("Final Score:", score);
  displayEndScreen(score);
}

// Function to display quiz results
function displayResults() {
  // Existing displayResults logic here
}

// Function to display the end screen with the final score
function displayEndScreen(finalScore) {
  document.getElementById('final-score').innerText = finalScore;
  document.getElementById('end-screen').classList.remove('hide');
}

// Add an event listener to the "Start Quiz" button
var startButton = document.getElementById("start");
startButton.addEventListener("click", showQuestions);
