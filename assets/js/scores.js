// score.js

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
  
    // Display the final score in the HTML
    var finalScoreElement = document.getElementById("final-score");
    if (finalScoreElement) {
      finalScoreElement.textContent = finalScore;
    }
  
    // Store the final score in local storage for future reference
    localStorage.setItem("finalScore", finalScore);
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
  

  // NOTES
  // When there are no more questions 
  // hide the question and choices 
  // then display the end-screen with the final score in the html
  // update initials and high score when submit button is pressed 
  // then update high scores and store in local storage along with initials of player
  // if score is greater than the high score update high score and initials of player
  