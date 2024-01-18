var highScores = [] //created an empty array to store the player initials 

  // Get the submit button element
  var submitButton = document.getElementById('submit');

  // Add a click event listener to the submit button
  submitButton.addEventListener('click', function () {
    submitScore();
  });


function submitScore() {
        // Get the input value (player initials)
        var initialsInput = document.getElementById('initials');
        var playerInitials = initialsInput.value.toUpperCase(); // Convert to uppercase for consistency
        // Check if the input is not empty
      if (playerInitials.trim() !== "") {
        // Add the player initials to the high scores array
        highScores.push(playerInitials);
        console.log(playerInitials)

              // Clear the input field
      initialsInput.value = "";

    }
}
