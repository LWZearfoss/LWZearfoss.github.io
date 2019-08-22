/* Project 2 - Luke Zearfoss */
#include <algorithm>
#include <cstdlib>
#include <ctime> 
#include <iostream>

using namespace std;

int main () {

  /* initialize random seed. Do this only once at the beginning of the main-function */
  srand ( time(NULL) );

  bool isGameRunning = true; // this variable will hold the state for the game loop
  int playerMove; // this variable will hold the player's move
  int computerMove; // this variable will hold the computer's move
  int playerMost; // this variable will hold the player's most used move
  int computerMost; // this variable will hold the computer's most used move
  int playAgain; // this variable will hold the player's continue input
  int playerRock = 0; // this variable will hold the player's rock count
  int playerPaper = 0; // this variable will hold the player's paper count
  int playerScissor = 0; // this variable will hold the player's scissor count
  int computerRock = 0; // this variable will hold the computer's rock count
  int computerPaper = 0; // this variable will hold the computer's paper count
  int computerScissor = 0; // this variable will hold the computer's scissor count
  int scoreWins = 0; // this variable will hold the player's wins
  int scoreLosses = 0; // this variable will hold the player's losses
  int scoreTies = 0; // this variable will hold the game's ties

  /* initialize game loop */
  while(isGameRunning) {

    /* prompt the player for their move */
    for (;;) {
      cout << "\nPlease choose your move:" << endl;
      cout << "1. Rock" << endl;
      cout << "2. Paper" << endl;
      cout << "3. Scissors" << endl;
      if (cin >> playerMove && playerMove > 0 && playerMove < 4) {
        break;
      }
      cin.clear();
      cin.ignore();
    } 

    /* record player move */
    switch (playerMove) {
      case 1: playerRock += 1;
              cout << "\nYou chose rock." << endl;
              break;
      case 2: playerPaper += 1;
              cout << "\nYou chose paper." << endl;
              break;
      case 3: playerScissor += 1;
              cout << "\nYou chose scissors." << endl;
              break;
    }

    /* generate  computer move: between 1 and 3. */
    computerMove = rand() % 3 + 1;

    /* record computer move */
    switch (computerMove) {
      case 1: computerRock += 1;
              cout << "\nThe computer chose rock." << endl;
              break;
      case 2: computerPaper += 1;
              cout << "\nThe computer chose paper." << endl;
              break;
      case 3: computerScissor += 1;
              cout << "\nThe computer chose scissors." << endl;
              break;
    }

    /* compare player's move to computer's move and display round results */
    if (playerMove == computerMove) {
      scoreTies += 1;
      cout << "\nThe round was a draw." << endl;
    } else if ((playerMove == 1 && computerMove == 3) || (playerMove == 3 && computerMove == 2) || (playerMove == 2 && computerMove == 1)) {
      scoreWins += 1;
      cout << "\nYou won the round." << endl;
    } else {
      scoreLosses += 1;
      cout << "\nYou lost the round." << endl;
    }

    /* prompt the player to continue */
    for (;;) {
      cout << "\nWould you like to play again?" << endl;
      cout << "1. Yes" << endl;
      cout << "2. No" << endl;
      if (cin >> playAgain && playAgain > 0 && playAgain < 3) {
        break;
      }
      cin.clear();
      cin.ignore();
    }

    /* parse player's continue input */
    switch(playAgain) {
      case 1: break;
      case 2: isGameRunning = false;
              break;
    } 
  }

  /* display game results */
  cout << "\nYou won " << scoreWins << " round(s)." << endl;
  cout << "You tied " << scoreTies << " round(s)." << endl;
  cout << "You lost " << scoreLosses << " round(s)." << endl;
  cout << "You played rock " << playerRock << " time(s)." << endl;
  cout << "You played paper " << playerPaper << " time(s)." << endl;
  cout << "You played scissors " << playerScissor << " time(s)." << endl;

  /* find most used player move */
  int playerArray [] = {playerRock, playerPaper, playerScissor};
  playerMost = *max_element(&playerArray[0], &playerArray[2]);

  /* find most used computer move */
  int computerArray [] = {computerRock, computerPaper, computerScissor};
  computerMost = *max_element(&computerArray[0], &computerArray[2]);

  /* find winner and display most used move */
  if (scoreWins == scoreLosses) {
    cout << "The game was a draw." << endl;
  } else if (scoreWins > scoreLosses) {
    cout << "You won the game playing ";
    if (playerMost == playerRock) {
      cout << "rock the most." << endl;
    } else if (playerMost == playerPaper) {
      cout << "paper the most." << endl;
    } else {
      cout << "scissors the most." << endl;
    }
  } else {
    cout << "The computer won the game playing ";
    if (computerMost == computerRock) {
      cout << "rock the most." << endl;
    } else if (computerMost == computerPaper) {
      cout << "paper the most." << endl;
    } else {
      cout << "scissors the most." << endl;
    }
  }

  /* display what player should have chosen to win most of the time */
  cout << "You should have chosen ";
  if (computerMost == computerRock) {
    cout << "paper to win most of the time." << endl;
  } else if (computerMost == computerPaper) {
    cout << "scissors to win most of the time." << endl;
  } else {
    cout << "rock to win most of the time." << endl;
  }

  return 0;
}

