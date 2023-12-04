// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  } from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

const toggleMode = (cls)=>{

  //document.body.classList.add('bg-'+cls)
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor = "#000000"
    showAlert("Dark mode has been enabled.", "success")
  }
  else{
    setMode("light")
    document.body.style.backgroundColor = "white"
    showAlert("Light mode has been enabled.", "success")
  }
}
  return (
    
    <>
      <Router>
      <Navbar title = "TextUtils" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>      
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<TextBox heading = "Enter your text here" mode = {mode} alert = {alert}/>} />
          <Route exact path="/about" element={<About mode = {mode}/>} />
        </Routes>               
      </div>
      </Router>
    </>
    
  );
}

export default App;
