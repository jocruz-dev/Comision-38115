
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import Class from './components/Class';
import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { Detail } from './components/Detail';
import Contexts from './Context/Items'
import Consumer from './components/Consumer';
import Consumer2 from './components/Consumer2';
import CartContext from './Context/CartContext';

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
    <Router>
      <CartContext>
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
          <Route exact path='/context' element={
            <Contexts.cartContext.Provider value={"TEST"}>
              <Consumer></Consumer>
            </Contexts.cartContext.Provider>
          }/>
          <Route exact path='/context/test' element={
            <Contexts.cartContext.Provider value={"OTRO TEST"}>
              <Consumer></Consumer>
            </Contexts.cartContext.Provider>
          }/>
          <Route exact path='/carrito' element={
              <Consumer2>
              </Consumer2>
          }/>
        </Routes>
      </CartContext>
    </Router>
  );
}

export default App;
