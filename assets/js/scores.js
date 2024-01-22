document.addEventListener("DOMContentLoaded", function () {
  // Your highScores array
  var highScores = [];

  // Function to get the final score
  function getFinalScore() {
    var finalScoreElement = document.getElementById("final-score");
    var finalScoreText = finalScoreElement.textContent.trim();
    var finalScore = parseFloat(finalScoreText);

    return finalScore;
  }

  // Function to submit the score
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

      // Log the updated highScores array to the console
      console.log("Updated High Scores:", highScores);

      // Save high scores to local storage
      localStorage.setItem("highScores", JSON.stringify(highScores));

      // Retrieve high scores from local storage (optional)
      var storedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

      // Clear the input field
      initialsInput.value = "";
    }
  }

  // Get the submit button element
  var submitButton = document.getElementById("submit");

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function () {
    submitScore();

  });
});
