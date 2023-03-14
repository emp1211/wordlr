import { answer } from './RowOne'

function RowSix( {onChange, value, onKeyDown, onSubmit, errorMessage, 
                  sorryMessage, winMessage } ) {
   
  return (
    <div>
      { errorMessage && <div className="error">Not in word list</div> }
      { winMessage && <div className="error">Phew</div> } 
      { sorryMessage && <div className="error">Sorry, the wordlr was: <br /> 
          {answer.toUpperCase()} </div> }
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