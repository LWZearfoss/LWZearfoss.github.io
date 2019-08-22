function Hangman() {
  var difficulty,
    numberLives,
    min,
    max,
    words,
    word,
    answer,
    i,
    j,
    falseFlag,
    remainingLetters,
    correctLetters,
    guess;
  //difficulty
  difficulty = document.getElementById("difficulty");
  if (difficulty.options[difficulty.selectedIndex].value == "1") {
    numberLives = 15;
    min = 0;
    max = 4;
  }
  if (difficulty.options[difficulty.selectedIndex].value == "2") {
    numberLives = 10;
    min = 4;
    max = 7;
  }
  if (difficulty.options[difficulty.selectedIndex].value == "3") {
    numberLives = 5;
    min = 7;
    max = 10;
  }
  if (difficulty.options[difficulty.selectedIndex].value == "4") {
    numberLives = 3;
    min = 10;
    max = 100;
  }
  //Create array for words
  words = wordlist();
  do {
    word = words[Math.floor(Math.random() * words.length)].toString();
  } while (word.length < min || word.length > max);

  //Make array for answer
  answer = [];
  for (i = 0; i < word.length; i++) {
    answer[i] = "_";
  }
  remainingLetters = word.length;

  //Create game variables
  correctLetters = [];

  //The playing loop
  while (remainingLetters > 0) {
    falseFlag = false;
    //Show player progress
    alert("You have " + numberLives + " lives remaining.\n" + answer.join(" "));
    //Prompt player to guess
    guess = prompt("Guess a letter or click 'Cancel' to stop the game.");
    if (guess === null) {
      //Leave the game
      break;
    }
    guess = guess.toLowerCase();
    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
      alert("Please enter one single letter.");
    } else if (correctLetters.includes(guess)) {
      alert("Letter has already been added. One life removed.");
      numberLives--;
    } else {
      //Update match with guess
      falseFlag = true;
      for (j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answer[j] = guess;
          falseFlag = false;
          remainingLetters--;
          correctLetters.push(guess);
        }
      }
      //Remove life for incorrect guess
    }
    if (falseFlag == true) {
      alert("Wrong guess! One life removed.");
      numberLives--;
    }
    //Game over check
    if (numberLives < 1) {
      alert("No lives remaining! Game over!");
      break;
    }
    //End of playing loop
  }

  //Final game message
  if (remainingLetters == 0) {
    alert("Good work!");
  }
  alert(
    "Your final progress was: " +
      answer.join(" ") +
      "\nThe correct answer was: " +
      word
  );
}
