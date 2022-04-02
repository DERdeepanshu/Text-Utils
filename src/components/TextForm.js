import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    const changeText = (e)=>{
        setText(e.target.value)
        wordCount()
    }
    const wordCount = ()=>{
        if(text === ""){
            setCount(0)
        }
        let temp = text.split(" ")
        temp = temp.filter((c)=>{
            if(c !== ""){
                return c
            }
        })
        setCount(temp.length)
    }
    const up = ()=>{
        setText(text.toUpperCase())
        props.showAlert("All Characters set to Upper Case!", "success")
    }
    const low = ()=>{
        setText(text.toLowerCase())
        props.showAlert("All Characters set to Lower Case!", "success")
    }
    const clear = ()=>{
        setText("")
        props.showAlert("Text Cleared!", "success")
    }
    const copy = ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert("Text Succefully Copied to Clipboard!", "success")
    }
    const removeExtra = ()=>{
        let newT = text.split(/[ ]+/)
        setText(newT.join(" "))
        props.showAlert("Removed extra spaces!", "success")
    }
    const cap = ()=>{
        let newT = text.replace(/\s\w/, (c)=>{
            return c.toUpperCase()
        });
        setText(newT.charAt(0).toUpperCase()+newT.slice(1))
        props.showAlert("All Characters Succefully capitalized!", "success")
    }
  return (
    <div style={{color: props.mode==="light"?"black":"#e9e7eb"}}>
        <div className="container my-3">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={changeText} style={{backgroundColor: props.mode==="light"?"white":"#212529d1", color: props.mode==="light"?"black":"white"}}></textarea>
            </div>
            <button className={`btn btn-${props.mode==="dark"? "dark":"primary"} mx-1`} onClick={up}>Convert to UpperCase</button>
            <button className={`btn btn-${props.mode==="dark"? "dark":"primary"} mx-1`} onClick={low}>Convert to LowerCase</button>
            <button className={`btn btn-${props.mode==="dark"? "dark":"primary"} mx-1`} onClick={cap}>Convert to Cap</button>
            <button className={`btn btn-${props.mode==="dark"? "dark":"primary"} mx-1`} onClick={copy}>Copy Text</button>
            <button className={`btn btn-${props.mode==="dark"? "dark":"primary"} mx-1`} onClick={removeExtra}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-1" onClick={clear}>Clear</button>
        </div>
        <div className="container my-3">
            <h3>Details</h3>
            <pre>
                Total Number of words:      {count} <br/>
                Total Number of Characters: {text.length}
            </pre>
        </div>
        <div className="container my-3">
            <h3>Preview</h3>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}
