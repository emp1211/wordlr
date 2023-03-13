import React, { useState } from 'react';
// import './reset.css';
import './index.css';
import Header from './Header';
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import RowFour from './RowFour';
import RowFive from './RowFive';
import RowSix from './RowSix';
import Keyboard from './Keyboard';
import { guessIsValidWord, guessMatchesAnswer, 
         checkLetters, shiftFocusToNextRow } from './helpers';

function App() {
  const [ guess, setGuess ] = useState({});
  const [ letterIndex, setLetterIndex ] = useState(0)
  const nameArr = ["firstchar", "secondchar", "thirdchar", "fourthchar", "fifthchar" ];
  const idArr = [ "letter_1", "letter_2", "letter_3", "letter_4", "letter_5" ];

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    const currEl = event.currentTarget;
    console.log("value: " + value);
    // If value is letter
    if (value.length === 1) {
        setGuess(values => ({...values, [name]: value}));
        currEl.style.border = 'solid rgb(135,138,140) 2px';
        currEl.nextElementSibling.removeAttribute('disabled');
        currEl.nextElementSibling.focus();
        setLetterIndex(prev => prev += 1);
    } else {
        currEl.previousElementSibling.removeAttribute('disabled');
        currEl.previousElementSibling.focus();
        setGuess(values => ({...values, [name]: value}));
        setLetterIndex(prev => prev = prev - 1);
    }
  }

  const handleClick = event => {
    event.preventDefault();
    console.log("letterIndex: " + letterIndex);
    const value = event.target.value;
    console.log('value: ' + value);
    if (value === "delete") {
      if (letterIndex === 0) {
        return;
      } else {
        const currEl = document.getElementById(idArr[letterIndex - 1]);
        const name = nameArr[letterIndex - 1];
        setGuess(values => ({...values, [name]: ""}));
        setLetterIndex(prev => prev = prev - 1);
        currEl.style.border = 'solid rgb(211,214,218) 2px';
        currEl.removeAttribute('disabled');
        currEl.focus();
      }
    } else if (value >= "a" && value <= "z") {
      if (letterIndex < 5) {
        const currEl = document.getElementById(idArr[letterIndex]);
        const name = nameArr[letterIndex];
        setGuess(values => ({...values, [name]: value}));
        setLetterIndex(prev => prev += 1);
        currEl.style.border = 'solid rgb(135,138,140) 2px';
        currEl.setAttribute('disabled', true);
        currEl.nextElementSibling.removeAttribute('disabled');  
        currEl.nextElementSibling.focus(); 
      } else if (letterIndex === 5) {
        return;
      }
    }
  }
  
  // handleBackspace - one func may work for both click backspace
  // and actual backspace key?
  // Create keydown event to handle when user hits 'Backspace' on empty input
  // setLetterIndex(prev => prev = prev - 1);


  const handleSubmit = (event) => {
    event.preventDefault();
    alert('submitted guess!');
    let guessString = ''
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }
    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      // setIsErrorVisible(true);
      document.getElementById('row_one').className = 'wiggle';
      setTimeout(() => {
        // setIsErrorVisible(false);
        document.getElementById('row_one').className = '';
      }, 1500);    
    } else {
      if (!guessMatchesAnswer(guessString)) {
        // Do the animation and run checkletters
        shiftFocusToNextRow('letter_5', 'letter_6');
        // Check letters and changes backgrounds
        checkLetters('.first-row-letter', guessString);
      } else {
        // This cryptic line below simply grabs the last letter box in the row
        // and disables it as the game is now over———event.currentTarget is the form
        // element because we are in the handleSubmit function———lastChild of the 
        // form is the hidden input and previousSibling is then the 5th letter
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters('.first-row-letter', guessString);
        // setGameOver(true);
        setTimeout(() => {
         // setGameOver(false);
        }, 1500);
      }
    }
  }
  

  console.log('guess: ') 
  console.log(guess);
  console.log('letterIndex: ' + letterIndex);
    
  return (
    <div className="App">
      <Header />
           < RowOne 
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit}
              
           />
           < RowTwo />
           < RowThree />
           < RowFour />
           < RowFive />
           < RowSix /> 
          < Keyboard 
              onClick={handleClick}
              onSubmit={handleSubmit}
          />
    </div>
  );
}

export default App;
