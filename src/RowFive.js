function RowFive(  {onChange, value, onKeyDown, onSubmit} ) {
 
  return (
    <div>
       {/* { isErrorVisible && <div className="error">Not in word list</div> }
       { gameOver && <div className="error">Impressive</div> } */}
        <form id="row_five" onSubmit={onSubmit} autoComplete="off">
          <input
            type="text"
            id="letter_21"
            name="twentyfirsthcar"
            value={value.twentyfirstchar || ""}
            className="letter fifth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          />  
          <input
            type="text"
            id="letter_22"
            name="twentysecondchar"
            value={value.twentysecondchar || ""}
            className="letter fifth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_23"
            name="twentythirdchar"
            value={value.twentythirdchar || ""}
            className="letter fifth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_24"
            name="twentyfourthchar"
            value={value.twentyfourthchar || ""}
            className="letter fifth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input
            type="text"
            id="letter_25"
            name="twentyfifthchar"
            value={value.twentyfifthchar || ""}
            className="letter fifth-row-letter"
            onChange={onChange}
            maxLength={1}
            disabled
            readOnly
          /> 
          <input type="submit" className="hdn-submit" value="hiddenInput" />
        </form>
    </div>
)}
  
export default RowFive;