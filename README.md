**JavaScript Quiz Challenge**

## Description

This project is a timed quiz on JavaScript fundamentals that allows coding boot camp students to test their knowledge and compare their progress to their peers. The quiz consists of a set of questions with multiple-choice answers, and users can save their high scores at the end of the quiz.

## User Story

AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

## Acceptance Criteria

The project includes the following features:

- A start button initiates the quiz.
When clicked, a timer starts, and the first question is displayed.
Question Navigation:

- Questions contain buttons for each answer.
When an answer is clicked, the next question appears.
If the clicked answer is incorrect, time is subtracted from the clock.
Quiz End:

- The quiz ends when all questions are answered or when the timer reaches 0.
Results Display:

- When the game ends, the user's score is displayed.
Save High Scores:

- Users can save their initials along with their score.
The ability to save high scores allows users to track their performance.

## Instructions 

-link to my repo https://github.com/jjbstudent/Quiz-Game

```javascript
git clone git@github.com:jjbstudent/Quiz-Game.git
code .
```

## Usage
To run the quiz, open the index.html file in a web browser. Click the "Start Quiz" button to begin the timed quiz on JavaScript fundamentals. Answer the questions, and at the end of the quiz, save your initials and score to compare with other participants.
- link to project https://jjbstudent.github.io/Quiz-Game/
![screen1](assets/ref/2.png)
![screen2](assets/ref/3.png)
![screen3](assets/ref/4.png)

# Contributions
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
https://www.learningguild.com/articles/coding-sound-with-javascript-beginner-s-guide/
https://bootcampspot.instructure.com/courses/5694/external_tools/313

# Problems 
Updating the highscores.html using this reference, updating an ul list by adding il items
```
// Get references to the list and button elements
const list = document.getElementById('list');
const addButton = document.getElementById('addButton');

// Create a click event listener for the button
addButton.addEventListener('click', function() {
  // Create a new list item element
  const listItem = document.createElement('li');
  
  // Set the text content of the list item
  listItem.textContent = 'New Item';

  // Append the list item to the list
  list.appendChild(listItem);
});
```

- Because i couldnt get the highscores list on my html to update i have used a consle log to display the saved scores using a highscores array

# Technologies Used
HTML
CSS
JavaScript
Credits
This project is created as part of a coding boot camp, and credit goes to the boot camp instructors and the development community for guidance and support.

## License
This project is licensed under the MIT License.



