import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  
  const upperCase = () =>{
    let result = text.toUpperCase()
    setText(result)
    props.showAlert("Converted to uppercase!" , "success")
  }

  const lowerCase = () =>{
    let result = text.toLowerCase()
    setText(result)
    props.showAlert("Converted to Lowercase!" , "success")
  }

  const copyText = () =>{
    let text = document.getElementById("textBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard" , "success")
  }

  const removeSpaces = () =>{
    let result = text.split(/[ ]+/)
    setText(result.join(" "))
    props.showAlert("Removed Extra Spaces" , "success")
  }

  const changeText = (event) =>{
    console.log("On Change")
    setText(event.target.value)
  }

  const capsCase = () =>{
    let words = text.split(" ")
    for(let i = 0; i < words.length; i++){
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
    }
    let newSentence = words.join(" ")
    setText(newSentence)
    props.showAlert("Converted to caps", "success")
  } 

  const sentenceCase = () =>{
    let words = text.split(" ")
    for(let i = 0 ; i < words.length; i++){
      if(words[i].length > 0  && i>0 && words[i-1].endsWith(".") ){
        words[i]=words[i].charAt(0).toUpperCase() + words[i].slice
      }
      else{
        words[i] = words[i].toLowerCase()
      }
    }
    if(words.length > 0){
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    let newSentence = words.join(" ")
    setText(newSentence)
    props.showAlert("Converted to sentence case", "success")
  }

  return (
    <>
    <div className="container">
    <div className="row">
      <div className="container col-lg">
        <h3 className="mt-3">Enter your text here</h3>
        <div className="mb-3 mt-3">
          <textarea name="" id="textBox" rows="8" className="form-control" value={text} onChange={changeText}></textarea>
        </div>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={upperCase}>
        <i className="bi bi-alphabet-uppercase"></i>
        </button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={lowerCase}>
        <i className="bi bi-alphabet"></i>
        </button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={copyText}><i className="bi bi-clipboard-check-fill"></i></button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={removeSpaces}>
        <i className="bi bi-eraser-fill"></i>
        </button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={capsCase}>Caps</button>
        <button className="btn btn-outline-primary my-3 mx-2" onClick={sentenceCase}>Sentence</button>
        <div className="mb-2 mt-2">
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        </div>
      </div>
      <div className="container mt-3 col-lg preview-styles">
        <h2>Text Preview</h2>
        <div style={{
            color: 'black',
            background: '#fff',
            width: '100%',
            height: '43%',
            borderRadius: '4px',
            padding: '10px',
            marginTop: '12px',
            overflow: 'auto'
        }}>
        <p>{text.length>0 ?text:"Enter your text in the textarea"}
        </p>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
