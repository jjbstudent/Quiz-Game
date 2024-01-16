
var score = 0;
var timerInterval; // Variable to store the timer interval ID

// Function to show questions
function showQuestions() {
  var startScreen = document.getElementById("start-screen");
  var questionsSection = document.getElementById("questions");

  // Hide the start screen
  startScreen.classList.add("hide");

  // Show the questions section
  questionsSection.classList.remove("hide");

  // Start the timer
  startTimer();

  // Display the first question
  displayQuestion(0);
}

// Function to start the timer
function startTimer() {
  var timeElement = document.getElementById("time");
  var timeLeft = 30; // Set the initial time limit (in seconds) to 30

  // Update the timer every second
  timerInterval = setInterval(function () {
    // Display the remaining time
    timeElement.textContent = timeLeft;

    // Check if time has run out
    if (timeLeft <= 0) {
      // Stop the timer
      clearInterval(timerInterval);

      // Handle quiz completion logic when time runs out
      displayResults();
    }

    // Decrement the time
    timeLeft--;
  }, 1000); // Update every 1000 milliseconds (1 second)
}



// Function to display a question
function displayQuestion(index) {
  var questionTitle = document.getElementById("question-title");
  var choicesContainer = document.getElementById("choices");

  // Display the question
  questionTitle.textContent = questionsArray[index].question;

  // Clear previous choices
  choicesContainer.innerHTML = "";

  // Display choices as buttons
  questionsArray[index].choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choice;

 // Add an event listener for choice selection 
choiceButton.addEventListener("click", function () {
  // Save the selected choice to local storage
  localStorage.setItem(`question_${index}_choice`, choice);

  // Check if the selected choice is correct
  if (choice === questionsArray[index].correctAnswer) {
    // Increment the score if the choice is correct
    score++;

  }

  // Move to the next question
  index++;

  // Check if there are more questions
  if (index < questionsArray.length) {
    // Display the next question
    displayQuestion(index);
  } else {
    // No more questions, handle quiz completion logic

    // Display the results using the recorded choices in local storage
    displayResults();
    console.log("Final Score:", score);
    document.addEventListener
    // Stop the timer
    clearInterval(timerInterval);
  }
});


    // Add a class to style the buttons 
    choiceButton.classList.add("choice-button");

    choicesContainer.appendChild(choiceButton);

    // Add a line break after each button  
    choicesContainer.appendChild(document.createElement("br"));
  });
}

// Add an event listener to the "Start Quiz" button
var startButton = document.getElementById("start");
startButton.addEventListener("click", showQuestions);
