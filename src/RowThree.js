function RowThree( {onChange, value, onKeyDown, onSubmit } ) {

  return (
    <div>
      {/* { isErrorVisible && <div className="error">Not in word list</div> }
      { gameOver && <div className="error">Magnificent</div> } */}
        <form id="row_three" onSubmit={onSubmit} autoComplete="off">
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
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}

export default RowThree;