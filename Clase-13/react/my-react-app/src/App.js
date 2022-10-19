import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import Class from './components/Class';
import React, { useState, useContext } from 'react';
import NavBar from './components/NavBar';
import { Detail } from './components/Detail';
import Contexts from './Context/Items'
import ThemeContext from './Context/ThemeContext';
import Cart from './components/Cart';
import CartContext from './components/CartContext';

function App() {

  const [state, setState] = useState({test:"test"})
  const [theme, setTheme] = useState(true)

  const context = useContext(Contexts.themeContext)
  
  const changeTheme = ()=>{
    setTheme(!theme)
  }

  return (
    <CartContext>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route exact path='/' element={
              <Class/>
            }/>
            <Route exact path='/categorias/:id' element={
              <Function items={state}/>
            }/>
            <Route exact path='/items/:id' element={
                <Detail/>
            }/>
            <Route exact path='/cart' element={
                <Cart/>
            }/>
          </Routes>
        </Router>
    </CartContext>
  );
}

export default App;
