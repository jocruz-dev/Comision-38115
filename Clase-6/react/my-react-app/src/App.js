
import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import { useState, useEffect } from 'react';

function App() {

const peticionAPI = ["pancho", "ruben","pancho", "ruben","pancho", "ruben"]
const [state, setState] = useState([])

useEffect(()=>{
  setState(peticionAPI)
},[])

  return (
    <div className="App">
      <NavBar></NavBar>
      <Function items={state} name="Test"></Function>
      {/* <List data={state}></List> */}
    </div>
  );
}

export default App;
