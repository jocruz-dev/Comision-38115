
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Detail } from './components/Detail';
function App() {

  const [state, setState] = useState({test:"test"})

  const handleClick = ()=>{
    console.log("EVENTO ESCUCHADO DESDE EL PADRE");
  }

  useEffect(() => {
    window.addEventListener('click',handleClick)
    return (
      window.removeEventListener('click',handleClick)
    )
  }, [])
  

  return (
    <>
      <h1>HOLA</h1>
    </>
  );
}

export default App;
