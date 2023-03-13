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

export const checkLetters = (inputRow, userGuess) => {
    const letterTiles = document.querySelectorAll(inputRow);
    for (let i = 0; i < userGuess.length; i++) {
        letterTiles[i].style.color = 'white';
        if (userGuess[i] === answer[i]) {
            letterTiles[i].style.backgroundColor = 'rgb(106,170,100)';
            letterTiles[i].style.border = 'solid rgb(106,170,100) 2px';
        } else if (answer.includes(userGuess[i])) {
            letterTiles[i].style.backgroundColor = 'rgb(201,180,88)';
            letterTiles[i].style.border = 'solid rgb(201,180,88) 2px';
        } else {
            letterTiles[i].style.backgroundColor = 'rgb(135,138,140)';
            letterTiles[i].style.border = 'solid rgb(135,138,140) 2px';
        }
    }
};
