import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React,{useState} from 'react'

// import About from './components/About';


function App() {
  const [mode,setMode] = useState("dark")

const toggleMode = ()=>{
  if(mode==="dark"){
    setMode("light")
  }
  else{
    setMode("dark")
  }
}
  return (
    
    <>
      <Navbar title = "TextUtils" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextBox heading = "Enter your text here"/>
        {/* <About/> */}
      </div>
      
    </>
    
  );
}

export default App;
