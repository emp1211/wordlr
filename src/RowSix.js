function RowSix( {onChange, value, onKeyDown, onSubmit } ) {
   
  return (
    <div>
      {/* { isErrorVisible && <div class="error">Not in word list</div> }
      { gameOver && <div className="error">Impressive</div> }
      { sorryMessage && <div className="error">Sorry, you did not solve the puzzle</div> } */}
        <form id="row_six" onSubmit={onSubmit} autoComplete="off">
          <input
            type="text"
            id="letter_26"
            name="twentysixthchar"
            value={value.twentysixthchar || ""}
            className="letter sixth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          />  
          <input
            type="text"
            id="letter_27"
            name="twentyseventhchar"
            value={value.twentyseventhchar || ""}
            className="letter sixth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_28"
            name="twentyeighthchar"
            value={value.twentyeighthchar || ""}
            className="letter sixth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_29"
            name="twentyninthchar"
            value={value.twentyninthchar || ""}
            className="letter sixth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_30"
            name="thirtiethchar"
            value={value.thirtiethchar || ""}
            className="letter sixth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowSix;