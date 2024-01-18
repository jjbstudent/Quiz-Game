var highScores = []; //created an empty array to store the player initials
var finalScoreElement = document.getElementById("final-score");
var finalScore = finalScoreElement.textContent; // Assuming the final score is stored as text content

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
    // Add the player initials to the high scores array
    highScores.push({
        initials: playerInitials,
        score: finalScore
    });

    // Clear the input field
    initialsInput.value = "";
    console.log(playerInitials)

}
}
