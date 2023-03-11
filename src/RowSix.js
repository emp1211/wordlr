import { useState } from "react";
import { focusNextLetterBox, focusPreviousLetterBox, guessIsValidWord,
         guessMatchesAnswer, checkLetters } from "./helpers";


function RowSix() {
  
  const [ guess, setGuess ] = useState({});
  const [ isErrorVisible, setIsErrorVisible ] = useState(false); 
  const [ gameOver, setGameOver ] = useState(false);
  const [ sorryMessage, setSorryMessage ] = useState(false);
    
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
      document.getElementById('row_six').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
        document.getElementById('row_six').className = '';
      }, 1500);    
    } else {
      event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
      if (!guessMatchesAnswer(guessString)) {
        // Send sorry message, you did not solve the puzzle
        setSorryMessage(true);
        setTimeout(() => {
          setSorryMessage(false);
        }, 2500);
        // Check letters and changes backgrounds
        checkLetters('.sixth-row-letter', guessString);
      } else {
        checkLetters('.sixth-row-letter', guessString);
        setGameOver(true);
        setTimeout(() => {
          setGameOver(false);
        }, 1500);
      }
    }
  }

  return (
    <div>
      { isErrorVisible && <div class="error">Not in word list</div> }
      { gameOver && <div className="error">Impressive</div> }
      { sorryMessage && <div className="error">Sorry, you did not solve the puzzle</div> }
        <form id="row_six" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            id="letter_26"
            name="firstchar"
            value={guess.firstchar || ""}
            className="letter sixth-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          />  
          <input
            type="text"
            id="letter_27"
            name="secondchar"
            value={guess.secondchar || ""}
            className="letter sixth-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            type="text"
            id="letter_28"
            name="thirdchar"
            value={guess.thirdchar || ""}
            className="letter sixth-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            type="text"
            id="letter_29"
            name="fourthchar"
            value={guess.fourthchar || ""}
            className="letter sixth-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input
            type="text"
            id="letter_30"
            name="fifthchar"
            value={guess.fifthchar || ""}
            className="letter sixth-row-letter"
            onChange={handleChange}
            maxLength={1}
            onKeyDown={handleKeyDown}
            disabled
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowSix;