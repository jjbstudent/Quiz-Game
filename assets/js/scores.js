var score = 0;

// Function to display quiz results
function displayResults() {
  // Retrieve the recorded choices from local storage

  // Display the results
  console.log("Quiz results:");
  console.log("Final Score:", score);

  // Hide the questions and choices after the last question in the array
  var questionsSection = document.getElementById("questions");
  if (questionsSection) {
    questionsSection.classList.add("hide");
  }
}
  
  