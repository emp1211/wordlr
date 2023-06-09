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
         checkLetters } from './helpers';

function App() {
  const [ isErrorVisible, setIsErrorVisible ] = useState(false);
  const [ gameOver, setGameOver ] = useState(false);
  const [ winMessage, setWinMessage ] = useState(false);
  const [ sorryMessage, setSorryMessage ] = useState(false);
  const [ guess, setGuess ] = useState({});
  const [ letterIndex, setLetterIndex ] = useState(0);
  const [ rowIndex, setRowIndex ]  = useState(0);
  const nameArr = [ ["firstchar", "secondchar", "thirdchar", "fourthchar", "fifthchar"], 
                    ["sixthchar", "seventhchar", "eighthchar", "ninthchar", "tenthchar"],
                    ["eleventhchar", "twelfthchar", "thirteenthchar", "fourteenthchar", "fifteenthchar"],
                    ["sixteenthchar", "seventeenthchar", "eighteenthchar", "ninteenthchar", "twentiethchar"],
                    ["twentyfirstchar", "twentysecondchar", "twentythirdchar", "twentyfourthchar", "twentyfifthchar"],
                    ["twentysixthchar", "twentyseventhchar", "twentyeighthchar", "twentyninthchar", "thirtiethchar"]
                  ];
  const idArr = [ ["letter_1", "letter_2", "letter_3", "letter_4", "letter_5" ],
                  ["letter_6", "letter_7", "letter_8", "letter_9", "letter_10"],
                  ["letter_11", "letter_12", "letter_13", "letter_14", "letter_15"],
                  ["letter_16", "letter_17", "letter_18", "letter_19", "letter_20"],
                  ["letter_21", "letter_22", "letter_23", "letter_24", "letter_25"],
                  ["letter_26", "letter_27", "letter_28", "letter_29", "letter_30"]];
  const rowClassNameArr = [".tc-0", ".tc-1", ".tc-2", ".tc-3", ".tc-4", ".tc-5"] 
  const formIdArr = ["row_one", "row_two", "row_three", "row_four", "row_five", "row_six"];

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
    if (!gameOver) {
      console.log("letterIndex: " + letterIndex);
      const value = event.target.value;
      console.log('value: ' + value);
      if (value === "delete") {
        if (letterIndex === 0) {
          return;
        } else {
          const currEl = document.getElementById(idArr[rowIndex][letterIndex - 1]);
          console.log('currEl: ');
          console.log(currEl)
          const name = nameArr[rowIndex][letterIndex - 1];
          setGuess(values => ({...values, [name]: ""}));
          setLetterIndex(prev => prev = prev - 1);
          currEl.removeAttribute('disabled');
          currEl.focus();
          console.log("currEl.style.border: ");
          console.log(currEl.style.border)
          currEl.parentElement.style.border = 'solid rgb(211,214,218) 2px';
        }
      } else if (value >= "a" && value <= "z") {
        if (letterIndex < 5) {
          const currEl = document.getElementById(idArr[rowIndex][letterIndex]);
          const name = nameArr[rowIndex][letterIndex];
          setGuess(values => ({...values, [name]: value}));
          setLetterIndex(prev => prev += 1);
          currEl.parentElement.style.border = 'solid rgb(135,138,140) 2px';
          currEl.setAttribute('disabled', true);
          currEl.nextElementSibling.removeAttribute('disabled');  
          currEl.nextElementSibling.focus(); 
        } else if (letterIndex === 5) {
          console.log('rowIndex: ' + rowIndex)
          console.log('tripped a return')
          return;
        }
      }
    } else {
      return;
    }
  }
  
  // handleBackspace - one func may work for both click backspace
  // and actual backspace key?
  // Create keydown event to handle when user hits 'Backspace' on empty input
  // setLetterIndex(prev => prev = prev - 1);


  const handleSubmit = (event) => {
    event.preventDefault();
    let guessString = ''

    // Build the guessString from the guess obj to test against the answer & dictionary 
    for (let i = 0; i < 5; i++) {
      guessString += guess[nameArr[rowIndex][i]].toLowerCase();
    }

    console.log('guessString: ' + guessString);

    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      console.log("formIdArr[rowIndex]: " + formIdArr[rowIndex]);
      document.getElementById(formIdArr[rowIndex]).className = 'wiggle';
      setTimeout(() => {
      setIsErrorVisible(false);
      document.getElementById(formIdArr[rowIndex]).className = '';
      }, 1500);
      return; 
    } else {
      if ((!guessMatchesAnswer(guessString)) && (rowIndex < 5)) {
        // Do the animation and run checkletters
        console.log("rowClassNameArr[rowIndex: ", rowClassNameArr[rowIndex])
        checkLetters(rowClassNameArr[rowIndex], guessString, rowIndex);
      } else if ((!guessMatchesAnswer(guessString)) && (rowIndex === 5)) {
        setSorryMessage(true);
        checkLetters(rowClassNameArr[rowIndex], guessString, rowIndex);
        setGameOver(true);
      } else {
        // This cryptic line below simply grabs the last letter box in the row
        // and disables it as the game is now over———event.currentTarget is the form
        // element because we are in the handleSubmit function———lastChild of the 
        // form is the hidden input and previousSibling is then the 5th letter
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters(rowClassNameArr[rowIndex], guessString, rowIndex);
        setGameOver(true);
        setWinMessage(true);
        setTimeout(() => {
          setWinMessage(false);
        }, 1500);
      }
    }   
    const currEl = document.getElementById(idArr[rowIndex][0]);
    currEl.focus();
    setRowIndex(prev => prev += 1);
    setLetterIndex(0);
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
              errorMessage={isErrorVisible}
              winMessage={winMessage}
           />
           < RowTwo 
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit} 
              errorMessage={isErrorVisible}
              winMessage={winMessage}
           />
           < RowThree
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errorMessage={isErrorVisible}
              winMessage={winMessage} 
           />
           < RowFour
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errorMessage={isErrorVisible}
              winMessage={winMessage}
           />
           < RowFive
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errorMessage={isErrorVisible}
              winMessage={winMessage}
          />
           < RowSix
              value={guess}
              onChange={handleChange}
              onSubmit={handleSubmit}
              errorMessage={isErrorVisible}
              winMessage={winMessage}
              sorryMessage={sorryMessage}
           /> 
          < Keyboard 
              onClick={handleClick}
              onSubmit={handleSubmit}
          />
    </div>
  );
}

export default App;
