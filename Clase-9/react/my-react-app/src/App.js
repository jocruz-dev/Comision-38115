
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import Class from './components/Class';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Detail } from './components/Detail';

function App() {

  const [state, setState] = useState([])

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
    <Router>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={
          <Class/>
        }/>
        <Route exact path='/function' element={
          <Function items={state}/>
        }/>
        <Route exact path='/items/:id' element={
          <Detail/>
        }/>
        <Route exact path='/icontext' element={
          <Detail/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
