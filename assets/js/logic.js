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
    // When the Quiz has ended display results 
    displayResults();
    console.log("Final Score:", score);
    document.addEventListener

    
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
