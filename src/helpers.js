import { dict } from "./dict";
import { answer } from "./RowOne";

export const focusPreviousLetterBox = (input, currElement) => {
    if ((input.length === 0) && (currElement.previousElementSibling)) {
        currElement.style.border = 'solid rgb(211,214,218) 2px';
        currElement.setAttribute('disabled', true);       
        currElement.previousElementSibling.removeAttribute('disabled');
        currElement.previousElementSibling.focus();
      } else if (input.length === 0) {
        currElement.style.border = 'solid rgb(211,214,218) 2px';
      }
};

export const focusNextLetterBox = event => {
    if ((event.currentTarget.value.length === 1) && 
        (event.keyCode >= 65) &&
        (event.keyCode <= 90) &&
        (event.currentTarget.nextElementSibling.value !== 'hiddenInput')) {
        event.currentTarget.setAttribute('disabled', true);
        event.currentTarget.nextElementSibling.removeAttribute('disabled');
        event.currentTarget.nextElementSibling.focus();
    }
};

export const guessIsValidWord = userGuess => {
    if (!dict.includes(userGuess)) {
        return false;
    } else {
        return true;
    }  
};

/*
export const shiftFocusToNextRow = (currRowLastLetterBox, nextRowFirstLetterBox) => {
    const currEl = document.getElementById(currRowLastLetterBox);
    currEl.setAttribute('disable', true);
    const nextEl = document.getElementById(nextRowFirstLetterBox);
    nextEl.removeAttribute('disabled');
    nextEl.focus();
};
*/

export const guessMatchesAnswer = userGuess => {
    if (userGuess === answer) {
        return true;
    } else {
        return false;
    }
};

export const checkLetters = (inputRow, userGuess, row) => {
    const letterTiles = document.querySelectorAll(inputRow);
    for (let i = 0; i < userGuess.length; i++) {
            if (userGuess[i] === answer[i]) {
                letterTiles[i].classList.add("flip-green-" + i);
            } else if (answer.includes(userGuess[i])) {
                letterTiles[i].classList.add("flip-gold-" + i);
            } else {
                letterTiles[i].classList.add("flip-gray-" + i);
            }
            // letterTiles[i].classList.add("flip-" + i);
            let count;
            if (row === 0) count = 0;
            else count = row * 5;
            document.getElementById('letter_' + (count + i + 1)).className = 'dont-flip-' + i;
            console.log(letterTiles[i].className);
            setTimeout(() => {
            // letterTiles[i].classList.remove('flip-' + i);
            }, 3001);
    
    }
};
