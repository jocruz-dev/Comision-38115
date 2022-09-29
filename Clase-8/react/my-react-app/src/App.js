
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Function from './components/Function';
import Class from './components/Class';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';

function App() {

  const [state, setState] = useState([])

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
          <Function items={state}/>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
