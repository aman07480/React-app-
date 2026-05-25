import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    // export default function TextForm(props) {
    const handleloClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const [text, setText] = useState(''); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state
    return (
        <>
        <div> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
        </div>
             <h1>Your Text Summary </h1>
             <p>{text.split("").length}words and {text.length} character</p>
             <p>{0.008*text.split(" ").length} Minutes per words</p>
             <h1>Preview</h1>
             <p>{text}</p>


        </>
             
    
        )
}