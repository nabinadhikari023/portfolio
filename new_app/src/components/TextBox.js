import React, {useState}from 'react'


export default function TextBox(props) {    
    const[text, setText] = useState("")
    
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

    
    const handleClear = ()=>{
        setText("");
    }


    const handleCopy = ()=>{
        let newText = text;
        navigator.clipboard.writeText(newText);        
    }


    const handleRemoveExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ')
        setText(newText);
    }

  return (
    <>
    <div className='container'style= {{color:(props.mode==="dark"?"white":"black")}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8" style={{backgroundColor:(props.mode==="dark"?"#2b3030":"white"),color:(props.mode==="dark"?"white":"black")}}></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-secondary mx-2 my-2" onClick={handleClear}>Clear Textbox</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style= {{color:(props.mode==="dark"?"white":"black")}}>
        <h1>Summary of the text.</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>It will take {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the text.</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
