import { useState } from "react";
import { focusNextLetterBox, focusPreviousLetterBox, shiftFocusToNextRow,
         guessIsValidWord, guessMatchesAnswer, checkLetters } from "./helpers";

function RowFour() {
  
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

    let guessString = "";
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }

    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      document.getElementById('row_four').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
        document.getElementById('row_four').className = '';
      }, 1500);    
    } else {
      if (!guessMatchesAnswer(guessString)) {
        // Do the animation and run checkletters
        shiftFocusToNextRow('letter_20', 'letter_21');
        // Check letters and changes backgrounds
        checkLetters('.fourth-row-letter', guessString);
      } else {
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters('.fourth-row-letter', guessString);
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
          { gameOver && <div className="error">Impressive</div> }
            <form id="row_four" onSubmit={handleSubmit} autoComplete="off">
              <input
                type="text"
                id="letter_16"
                name="firstchar"
                value={guess.firstchar || ""}
                className="letter fourth-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              />  
              <input
                type="text"
                id="letter_17"
                name="secondchar"
                value={guess.secondchar || ""}
                className="letter fourth-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_18"
                name="thirdchar"
                value={guess.thirdchar || ""}
                className="letter fourth-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_19"
                name="fourthchar"
                value={guess.fourthchar || ""}
                className="letter fourth-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input
                type="text"
                id="letter_20"
                name="fifthchar"
                value={guess.fifthchar || ""}
                className="letter fourth-row-letter"
                onChange={handleChange}
                maxLength={1}
                onKeyDown={handleKeyDown}
                disabled
              /> 
              <input type="submit" className="hdn-submit" value="hiddenInput" />
            </form>
          </div>    
  )}
  
export default RowFour;