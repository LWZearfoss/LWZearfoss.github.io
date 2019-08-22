/* Project 1 - Luke Zearfoss */
#include <cstdlib>
#include <ctime> 
#include <iostream>

using namespace std;

int main () {

  /* initialize random seed. Do this only once at the beginning of the main-function */ 
  srand ( time(NULL) ); 

  int difficultyLevel; // this variable will hold the difficulty level
  int maxValue; // this variable will hold the random number upper range
  int numberGuesses; // this variable will hold the remaining guess count
  int randomNumber; // this variable will hold the random number
  int playerGuess; // this variable will hold the player's guess

  /* prompt the player for their difficulty level */
  for (;;) {
    cout << "\nPlease choose your difficulty level:" << endl;
    cout << "1. Easy: 3 guesses, random number between 1 and 10" << endl;
    cout << "2. Medium: 4 guesses, random number between 1 and 50" << endl;
    cout << "3. Hard: 5 guesses, random number between 1 and 100" << endl;;
    if (cin >> difficultyLevel && difficultyLevel > 0 && difficultyLevel < 4) {
      break;
    }
    cin.clear();
    cin.ignore();
  }

  /* change upper range depending upon player input */
  if (difficultyLevel == 1) {
    maxValue = 10;
    numberGuesses = 3;
  } else if (difficultyLevel == 2) {
    maxValue = 50;
    numberGuesses = 4;
  } else {
    maxValue = 100;
    numberGuesses = 5;
  }

  /* generate secret number: between 1 and upper limit. */ 
  randomNumber = rand() % maxValue + 1;

  /* repeat while guesses remaining */
  while (numberGuesses > 0) {
    /* prompt the player for their guess */
    for (;;) {
      cout << "\nGuess the computer's number: " << endl;
      if (cin >> playerGuess) {
        break;
      }
      cin.clear();
      cin.ignore(512, '\n');
    }

    /* decrement guesses by one */
    numberGuesses -= 1;

    /* compare player input to guess */
    if (playerGuess == randomNumber) {
      cout << "\nYou guessed correctly! You win!" << endl;
      break;
    } else {
      if (playerGuess < randomNumber) {
        cout << "\nToo low!";
      }
      if (playerGuess > randomNumber) {
        cout << "\nToo high!";
      }
      cout << " I'm sorry, that is not correct." << endl;
      if (numberGuesses < 1) {
        cout << "\nGame over! You lose." << endl;
        break;
      }
      cout << "\nYou have " << numberGuesses << " guess(es) remaining." << endl;
    }   

  }

  return 0;
}
