var score = 0;

// Function to display quiz results
function displayResults() {
  // Retrieve the recorded choices from local storage
  var recordedChoices = [];
  for (var i = 0; i < questionsArray.length; i++) {
    var choice = localStorage.getItem(`question_${i}_choice`);
    recordedChoices.push(choice);
  }

  // Calculate the final score
  var finalScore = calculateFinalScore(recordedChoices);

  // Display the results
  console.log("Quiz results:");
  console.log("Recorded Choices:", recordedChoices);
  console.log("Final Score:", finalScore);

  // Log the correct and incorrect results for each question
  for (var i = 0; i < questionsArray.length; i++) {
    var correctAnswer = questionsArray[i].correctAnswer;
    var isCorrect = recordedChoices[i] === correctAnswer;
    console.log(`Question ${i + 1}: ${isCorrect ? "Correct" : "Incorrect"}`);
  }

  // Store the final score in local storage for future reference
  localStorage.setItem("finalScore", finalScore);

  // Hide the questions and choices after the last question in the array
  var questionsSection = document.getElementById("questions");
  if (questionsSection) {
    questionsSection.classList.add("hide");
  }
}
  // Function to calculate the final score
  function calculateFinalScore(recordedChoices) {
    var score = 0;
    for (var i = 0; i < recordedChoices.length; i++) {
      var correctAnswer = questionsArray[i].correctAnswer;
      if (recordedChoices[i] === correctAnswer) {
        score++;
      }
    }
    return score;
  }
  