function RowTwo( {onChange, value, onKeyDown, onSubmit } ) {

  return (
    <div>
      {/* { isErrorVisible && <div className="error">Not in word list</div> }
      { gameOver && <div className="error">Splendid</div> } */}
        <form id="row_two" onSubmit={onSubmit} autoComplete="off" >
          <input
            id="letter_6"
            type="text"
            name="sixthchar"
            value={value.sixthchar || ""}
            className="letter second-row-letter"
            onChange={onChange}
            maxLength={1}
            readOnly
          />  
          <input
            id="letter_7"
            type="text"
            name="seventhchar"
            value={value.seventhchar || ""}
            className="letter second-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            id="letter_8"
            type="text"
            name="eighthchar"
            value={value.eighthchar || ""}
            className="letter second-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            id="letter_9"
            type="text"
            name="ninthchar"
            value={value.ninthchar || ""}
            className="letter second-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            id="letter_10"
            type="text"
            name="tenthchar"
            value={value.tenthchar || ""}
            className="letter second-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowTwo;