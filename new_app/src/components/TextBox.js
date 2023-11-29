import React, {useState}from 'react'


export default function TextBox(props) {
    
    const handleUpClick = ()=>{
        //console.log(text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        //console.log(text);
        let newText = text.toLowerCase();
        setText(newText);
    }
        
    const handleOnChange = (event)=>{
        // console.log("Onchange.");
        setText(event.target.value);
    }
    const[text, setText] = useState("")

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-3">
        <h1>Summary of the text.</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>It will take {0.008* text.split(" ").length} Minutes to read the text.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
