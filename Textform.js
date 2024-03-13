import React, { useState } from "react";

export default function Textform(props) {
  const handleUclick = () => {
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("converted to UpperCase","sucess")  
  };
  const handleLclick = () => {
   
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to LowerCase","sucess") 
  };
  const handleClear = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
  };
  const hanldeChange = (event) => {
    console.log("onchnge");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="ex"
            rows="8"
            value={text}
            onChange={hanldeChange}
            style={{
              backgroundColor: props.mode === "dark" ? " grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUclick}>
          Covert To uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLclick}>
          Covert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Reverse text
        </button>
      </div>
      <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Text Summary</h1>
        <p>
          Words {text.split(" ").length} and Charcter {text.length}{" "}
        </p>
        <p>{0.008 * text.split(" ").length}Time to Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
