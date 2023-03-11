import { useState } from "react";
import { focusNextLetterBox, focusPreviousLetterBox, shiftFocusToNextRow, 
         guessIsValidWord, guessMatchesAnswer, checkLetters } from "./helpers";

function RowTwo() {
  
  const [ guess, setGuess ] = useState([]);
  const [ isErrorVisible, setIsErrorVisible ] = useState(false);
  const [ gameOver, setGameOver ] = useState(false);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setGuess(values => ({...values, [name]: value}));
    event.currentTarget.style.border = 'solid rgb(135,138,140) 2px';
    focusPreviousLetterBox(value, event.currentTarget);
  }

  // Create keydown event to handle when user hits 'Backspace' on empty input
  const handleKeyDown = event => {
    focusNextLetterBox(event);
  }

  // When user hits enter to submit guess
  const handleSubmit = event => {
    event.preventDefault();

    // Concatenate letters to string
    let guessString = ''
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }

    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      document.getElementById('row_two').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
        document.getElementById('row_two').className = '';
      }, 1500);    
    } else {
      if (!guessMatchesAnswer(guessString)) {
        // Do the animation and run checkletters
        shiftFocusToNextRow('letter_10', 'letter_11');
        // Check letters and changes backgrounds
        checkLetters('.second-row-letter', guessString);
      } else {
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters('.second-row-letter', guessString);
        setGameOver(true);
        setTimeout(() => {
        setGameOver(false);
        }, 1500);
      }
    }
  }

  return (
    <div>
      { isErrorVisible && <div className="error">Not in word list</div> }
      { gameOver && <div className="error">Splendid</div> }
        <form id="row_two" onSubmit={handleSubmit} autoComplete="off" >
          <input
            id="letter_6"
            type="text"
            name="firstchar"
            value={guess.firstchar || ""}
            className="letter second-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
          />  
          <input
            id="letter_7"
            type="text"
            name="secondchar"
            value={guess.secondchar || ""}
            className="letter second-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            id="letter_8"
            type="text"
            name="thirdchar"
            value={guess.thirdchar || ""}
            className="letter second-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            id="letter_9"
            type="text"
            name="fourthchar"
            value={guess.fourthchar || ""}
            className="letter second-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            id="letter_10"
            type="text"
            name="fifthchar"
            value={guess.fifthchar || ""}
            className="letter second-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowTwo;