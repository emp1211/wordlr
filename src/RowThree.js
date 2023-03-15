function RowThree( {onChange, value, onKeyDown, onSubmit,
                    errorMessage, winMessage } ) {

  return (
    <div>
      { errorMessage && <div className="error">Not in word list</div> }
      { winMessage && <div className="error">Splendid</div> } 
        <form id="row_three" onSubmit={onSubmit} autoComplete="off">
          <div className="tile-container tc-2">  
            <input
              type="text"
              id="letter_11"
              name="eleventhchar"
              value={value.eleventhchar || ""}
              className="letter third-row-letter"
              onChange={onChange}
              maxLength={1}
              disabled
              readOnly
            /> 
          </div>
          <div className="tile-container tc-2">  
            <input
              type="text"
              id="letter_12"
              name="twelfthchar"
              value={value.twelfthchar || ""}
              className="letter third-row-letter"
              onChange={onChange}
              maxLength={1}
              disabled
              readOnly
            />
          </div>
          <div className="tile-container tc-2">  
            <input
              type="text"
              id="letter_13"
              name="thirteenthchar"
              value={value.thirteenthchar || ""}
              className="letter third-row-letter"
              onChange={onChange}
              maxLength={1}
              disabled
              readOnly
            /> 
          </div>
          <div className="tile-container tc-2">  
            <input
              type="text"
              id="letter_14"
              name="fourteenthchar"
              value={value.fourteenthchar || ""}
              className="letter third-row-letter"
              onChange={onChange}
              maxLength={1}
              disabled
              readOnly
            />
          </div>
          <div className="tile-container tc-2">  
            <input
              type="text"
              id="letter_15"
              name="fifteenthchar"
              value={value.fifteenthchar || ""}
              className="letter third-row-letter"
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

export default RowThree;