import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, modeChange] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggle = ()=>{
    if(mode === "light"){
      modeChange("dark")
      document.body.style.backgroundColor = "#36393c"
      showAlert("Switched to Dark Mode", "success")
    }
    else{
      modeChange("light")
      document.body.style.backgroundColor = "white"
      showAlert("Switched to Light Mode", "success")
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggle={toggle} showAlert={showAlert}/>
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
      {/* <Routes>
        <Route path="/about" element={<About mode={mode}/>}>
        </Route>
        <Route path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
        </Route>
      </Routes> */}
      
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
