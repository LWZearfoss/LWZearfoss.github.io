import random
import re
import urllib2

print "\nSelect your difficulty level:"
print "1. I'm too young to die"
print "2. Hey, not too rough"
print "3. Hurt me plenty"
print "4. Ultra-Violence"
difficulty = raw_input("\nEnter your choice: ")

while not re.match("^[1-4]+$", difficulty):
    print("\nEnter a valid option.")
    difficulty = raw_input("\nEnter your choice: ")

if difficulty == "1":
    number_lives = 15
    min = 0
    max = 4

if difficulty == "2":
    number_lives = 10
    min = 4
    max = 7

if difficulty == "3":
    number_lives = 5
    min = 7
    max = 10

if difficulty == "4":
    number_lives = 3
    min = 10
    max = 100

word = random.choice(urllib2.urlopen("https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt").read().splitlines())
while not min <= len(word) <= max:
    word = random.choice(urllib2.urlopen("https://raw.githubusercontent.com/first20hours/google-10000-english/master/google-10000-english.txt").read().splitlines())    

answer = []

for i in word:
    answer += "_"

remaining_letters = len(word)
correct_letters = []

while remaining_letters > 0:
    false_flag = False
    print "\nYou have", number_lives, "lives remaining.\n", " ".join(answer)
    guess = raw_input("Guess a letter or press 'CTRL + C' to cancel: ").lower()
    if len(guess) is not 1 or not re.match("^[a-z]+$", guess):
        print "\nEnter one single letter."
    elif any(guess in i for i in correct_letters):
        print "\nLetter has already been added. One life removed."
        number_lives -= 1
    else:
        false_flag = True
        for i, j in enumerate(word):
            if  j == guess:
                answer[i] = guess
                false_flag = False
                remaining_letters -= 1
                correct_letters.append(guess)

    if false_flag == True:
        print "\nWrong guess! One life removed."
        number_lives -= 1

    if number_lives < 1:
        print "\nNo lives remaining! Game over!\n"
        break
if remaining_letters == 0:
    print "\nGood work!"

print "Your final progress was:", " ".join(answer), "\nThe correct answer was:", word
