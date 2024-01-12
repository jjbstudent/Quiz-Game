// logic.js

// Assuming you have an array of questions in questions.js
// var questionsArray = [...];

// Function to show questions
function showQuestions() {
    var startScreen = document.getElementById("start-screen");
    var questionsSection = document.getElementById("questions");
  
    // Hide the start screen
    startScreen.classList.add("hide");
  
    // Show the questions section
    questionsSection.classList.remove("hide");
  
    // Display the first question
    displayQuestion(0);
  }
  
  // Function to display a question
  function displayQuestion(index) {
    var questionTitle = document.getElementById("question-title");
    var choicesContainer = document.getElementById("choices");
  
    // Display the question
    questionTitle.textContent = questionsArray[index].question;
  
    // Clear previous choices
    choicesContainer.innerHTML = "";
  }
  
  // Add an event listener to the "Start Quiz" button
  var startButton = document.getElementById("start");
  startButton.addEventListener("click", showQuestions);