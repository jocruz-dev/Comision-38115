
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import Class from './components/Class';
import React, { useEffect, useState, useContext } from 'react';
import NavBar from './components/NavBar';
import { Detail } from './components/Detail';
import Contexts from './Context/Items'
import ThemeContext from './Context/ThemeContext';

function App() {

  const [state, setState] = useState({test:"test"})
  const [theme, setTheme] = useState(true)

  const handleClick = ()=>{
    console.log("EVENTO ESCUCHADO DESDE EL PADRE");
  }

  const context = useContext(Contexts.themeContext)

  useEffect(() => {
    window.addEventListener('click',handleClick)
    return (
      window.removeEventListener('click',handleClick)
    )
  }, [])
  
  const changeTheme = ()=>{
    setTheme(!theme)
  }

  return (
    <ThemeContext>
      <div className={context ? "light" : "dark"}>
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
          </Routes>
        </Router>
      </div>
    </ThemeContext>
  );
}

export default App;
