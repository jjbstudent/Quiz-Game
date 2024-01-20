document.addEventListener("DOMContentLoaded", function () {
  // Your highScores array
  var highScores = [];

  // Function to get the final score
  function getFinalScore() {
    var finalScoreElement = document.getElementById("final-score");
    var finalScoreText = finalScoreElement.textContent.trim();
    var finalScore = parseFloat(finalScoreText);

    // Log the final score for debugging
    console.log("Final Score:", finalScore);

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

  // Function to add item to the highscores list
  function addItem(initials, finalScore) {
    // Create a new list item element
    var newItem = document.createElement("li");

    // Set the text content of the new item
    newItem.textContent = initials + " - Score: " + finalScore;

    // Append the new item to the highscores list
    document.getElementById("highscores").appendChild(newItem);
  }

  // Get the submit button element
  var submitButton = document.getElementById("submit");

  // Add a click event listener to the submit button
  submitButton.addEventListener("click", function () {
    submitScore();

    // Get the input values
    var initials = document.getElementById("initials").value;
    var finalScore = parseInt(document.getElementById("finalScore").value, 10);

    // Validate if finalScore is a valid integer
    if (isNaN(finalScore)) {
      alert("Please enter a valid integer for the Final Score.");
      return;
    }

    // Add the item to the highscores list
    addItem(initials, finalScore);

    // Clear the input fields
    document.getElementById("initials").value = "";
    document.getElementById("finalScore").value = "";
  });
});
