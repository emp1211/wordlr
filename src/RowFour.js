function RowFour( {onChange, value, onKeyDown, onSubmit,
                  errorMessage, winMessage } ) {

  return (
      <div>
        { errorMessage && <div className="error">Not in word list</div> }
        { winMessage && <div className="error">Impressive</div> } 
          <form id="row_four" onSubmit={onSubmit} autoComplete="off">
            <div className="tile-container tc-3">  
               <input
                type="text"
                id="letter_16"
                name="sixteenthchar"
                value={value.sixteenthchar || ""}
                className="letter fourth-row-letter"
                onChange={onChange}
                maxLength={1}
                disabled
                readOnly
              />
            </div>
            <div className="tile-container tc-3">  
              <input
                type="text"
                id="letter_17"
                name="seventeenthchar"
                value={value.seventeenthchar || ""}
                className="letter fourth-row-letter"
                onChange={onChange}
                maxLength={1}
                disabled
                readOnly
              />
            </div>
            <div className="tile-container tc-3">  
              <input
                type="text"
                id="letter_18"
                name="eighteenthchar"
                value={value.eighteenthchar || ""}
                className="letter fourth-row-letter"
                onChange={onChange}
                maxLength={1}
                disabled
                readOnly
              />
            </div>
            <div className="tile-container tc-3">  
              <input
                type="text"
                id="letter_19"
                name="ninteenthchar"
                value={value.ninteenthchar || ""}
                className="letter fourth-row-letter"
                onChange={onChange}
                maxLength={1}
                disabled
                readOnly
              />
            </div>
            <div className="tile-container tc-3">  
              <input
                type="text"
                id="letter_20"
                name="twentiethchar"
                value={value.twentiethchar || ""}
                className="letter fourth-row-letter"
                onChange={onChange}
                maxLength={1}
                disabled
                readOnly
              />
            </div>
            <input type="submit" className="hdn-submit" value="hiddenInput" />
          </form>
        </div>    
  )}

  export default RowFour;