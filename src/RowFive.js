import { useState } from "react";
import { focusPreviousLetterBox, shiftFocusToNextRow,
         guessIsValidWord, guessMatchesAnswer, checkLetters } from "./helpers";

function RowFive() {
  
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



  // When user hits enter to submit guess
  const handleSubmit = event => {
    event.preventDefault();

    let guessString = '';
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }

    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      document.getElementById('row_five').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
        document.getElementById('row_five').className = '';
      }, 1500);    
    } else {
      if (!guessMatchesAnswer(guessString)) {
        // Do the animation and run checkletters
        shiftFocusToNextRow('letter_25', 'letter_26');
        // Check letters and changes backgrounds
        checkLetters('.fifth-row-letter', guessString);
      } else {
        event.currentTarget.lastChild.previousSibling.setAttribute('disabled', true);
        checkLetters('.fifth-row-letter', guessString);
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
        <form id="row_five" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            id="letter_21"
            name="firstchar"
            value={guess.firstchar || ""}
            className="letter fifth-row-letter"
            onChange={handleChange}
            maxLength={1}
            
            disabled
          />  
          <input
            type="text"
            id="letter_22"
            name="secondchar"
            value={guess.secondchar || ""}
            className="letter fifth-row-letter"
            onChange={handleChange}
            maxLength={1}
          
            disabled
          /> 
          <input
            type="text"
            id="letter_23"
            name="thirdchar"
            value={guess.thirdchar || ""}
            className="letter fifth-row-letter"
            onChange={handleChange}
            maxLength={1}
           
            disabled
          /> 
          <input
            type="text"
            id="letter_24"
            name="fourthchar"
            value={guess.fourthchar || ""}
            className="letter fifth-row-letter"
            onChange={handleChange}
            maxLength={1}
          
            disabled
          /> 
          <input
            type="text"
            id="letter_25"
            name="fifthchar"
            value={guess.fifthchar || ""}
            className="letter fifth-row-letter"
            onChange={handleChange}
            maxLength={1}
       
            disabled
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowFive;