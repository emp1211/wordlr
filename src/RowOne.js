import { useState } from "react";
import { focusNextLetterBox, focusPreviousLetterBox, shiftFocusToNextRow,
         guessIsValidWord, guessMatchesAnswer, checkLetters } from "./helpers";
import { dict } from "./dict";

export const answer = dict[Math.floor(Math.random() * dict.length)];

// Magnificent
// Impressive
// Splendid
// Phew
// Tiles flip all green first, then the message boxes pops up

// Problem: boolean -> boolean
// take boolean input (matchesAnswer) 
 // if true
 // then make boolean gameOver true
 // display congratulations message div
 // lock all inputs

function RowOne() {

  console.log(answer);
  
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

    let guessString = ''
    for (const letter in guess) {
      guessString += guess[letter].toLowerCase();
    }

    if (!guessIsValidWord(guessString)) {
      // If guess is not in dictionary, show error div
      setIsErrorVisible(true);
      document.getElementById('row_one').className = 'wiggle';
      setTimeout(() => {
        setIsErrorVisible(false);
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
      <form id="row_one" onSubmit={handleSubmit} autoComplete="off" >
        <input
          id="letter_1"
          type="text"
          name="firstchar"
          value={guess.firstchar || ""}
          className="letter first-row-letter"
          onChange={handleChange}
          maxLength={1}
          onKeyDown={handleKeyDown}
          autoFocus
        />  
        <input
          id="letter_2"
          type="text"
          name="secondchar"
          value={guess.secondchar || ""}
          className="letter first-row-letter"
          onChange={handleChange}
          maxLength={1}
          onKeyDown={handleKeyDown}
          disabled
        /> 
        <input
          id="letter_3"
          type="text"
          name="thirdchar"
          value={guess.thirdchar || ""}
          className="letter first-row-letter"
          onChange={handleChange}
          maxLength={1}
          onKeyDown={handleKeyDown}
          disabled
        /> 
        <input
          id="letter_4"
          type="text"
          name="fourthchar"
          value={guess.fourthchar || ""}
          className="letter first-row-letter"
          onChange={handleChange}
          maxLength={1}
          onKeyDown={handleKeyDown}
          disabled
        /> 
        <input
          id="letter_5"
          type="text"
          name="fifthchar"
          value={guess.fifthchar || ""}
          className="letter first-row-letter"
          onChange={handleChange}
          maxLength={1}
          onKeyDown={handleKeyDown}
          disabled
        /> 
        <input type="submit" className="hdn-submit" value="hiddenInput" />
      </form>
    </div>

)}

export default RowOne;