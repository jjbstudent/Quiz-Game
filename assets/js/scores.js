document.addEventListener("DOMContentLoaded", function () {

var highScores = []; // created an empty array to store the player initials

// Function to get the final score
function getFinalScore() {
  var finalScoreElement = document.getElementById("final-score");
  var finalScoreText = finalScoreElement.textContent.trim();
  var finalScore = parseFloat(finalScoreText);

  // Log the final score for debugging
  console.log("Final Score:", finalScore);

  return finalScore;
}

// Get the submit button element
var submitButton = document.getElementById("submit");

// Add a click event listener to the submit button
submitButton.addEventListener("click", function () {
  submitScore();
});

function submitScore() {
  // Get the input value (player initials)
  var initialsInput = document.getElementById("initials");
  var playerInitials = initialsInput.value.toUpperCase(); // Convert to uppercase for consistency

  // Check if the input is not empty
  if (playerInitials.trim() !== "") {
    // Get the final score
    var finalScore = getFinalScore();

    // Add the player initials to the high scores array
    highScores.push({
      initials: playerInitials,
      score: finalScore,
    });

    // Clear the input field
    initialsInput.value = "";


    // Log the updated highScores array to the console
    console.log("Updated High Scores:", highScores);

    // Save high scores to local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Retrieve high scores from local storage
    var storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
  }
}

function displayHighScores() {
  // Get the <ol> element
  var highScoresList = document.getElementById("highscores");


  // Iterate through high scores and create list items
  highScores.forEach(function (entry) {
    var listItem = document.createElement("li");
    listItem.textContent = entry.initials + " - " + entry.score;
    highScoresList.appendChild(listItem);
  });
}

// Call the function to display high scores when the page loads or as needed
displayHighScores();

});
