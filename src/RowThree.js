import { useState } from "react";
import { focusNextLetterBox, focusPreviousLetterBox, shiftFocusToNextRow,
         guessIsValidWord, guessMatchesAnswer, checkLetters } from "./helpers";

function RowThree() {
  
  const [ guess, setGuess ] = useState({});
  const [ isErrorVisible, setIsErrorVisible ] = useState(false);  
  const [ gameOver, setGameOver ] = useState(false);

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setGuess(values => ({...values, [name]: value}))
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

    // Need to refactor this propertly with useState()
    let guessString = "";
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }

     if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      document.getElementById('row_three').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
        document.getElementById('row_three').className = '';
      }, 1500);    
    } else {
      if (!guessMatchesAnswer(guessString)) {
        // Do the animation and run checkletters
        shiftFocusToNextRow('letter_15', 'letter_16');
        // Check letters and changes backgrounds
        checkLetters('.third-row-letter', guessString);
      } else {
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters('.third-row-letter', guessString);
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
          { gameOver && <div className="error">Magnificent</div> }
            <form id="row_three" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                id="letter_11"
                name="firstchar"
                value={guess.firstchar || ""}
                className="letter third-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              />  
              <input
                type="text"
                id="letter_12"
                name="secondchar"
                value={guess.secondchar || ""}
                className="letter third-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_13"
                name="thirdchar"
                value={guess.thirdchar || ""}
                className="letter third-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_14"
                name="fourthchar"
                value={guess.fourthchar || ""}
                className="letter third-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_15"
                name="fifthchar"
                value={guess.fifthchar || ""}
                className="letter third-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input type="submit" className="hdn-submit" value="hiddenInput" />
            </form>
        </div>
)}
  
export default RowThree;