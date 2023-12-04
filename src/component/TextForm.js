import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //correct way to change the state

    const handelupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handellowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handelClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert(" Text cleared!", "success");
    }

    const handelCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handelExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has removed !", "success");
    }

    const handelonChange = (event) => {
        setText(event.target.value)
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-2'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelonChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#0e4e60' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelupClick}>Convert Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handellowClick}>Convert Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handelExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="conatiner my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
