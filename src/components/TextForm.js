import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = ()=> {
        // console.log("Uppecase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLowClick = ()=> {
        // console.log("Uppecase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = ()=> {
        setText("");
        props.showAlert("cleared","success");
    }

    const handleOnChange = (event)=> {
        // console.log("Onchangee");
        setText(event.target.value); 
    }

    // Declare a new state variable, which we'll call "count"
const [text, setText] = useState('Enter Text here');
// text = "new twxt"; //wrong way to set state
// setText("new twxt"); //correct way to set state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
    <p>{0.008*(text.split(" ").length)} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
    </div>
    </>
  );
}
