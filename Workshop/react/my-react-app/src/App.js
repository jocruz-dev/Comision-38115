import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/containers/Function';
import Home from './components/containers/Home';
import React, { useState, useContext } from 'react';
import NavBar from './components/presentation/NavBar';
import { Detail } from './components/containers/Detail';
import Contexts from './Context/Items'
import Cart from './components/containers/Cart';
import CartContext from './components/providers/CartContext';

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
              <Home/>
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
