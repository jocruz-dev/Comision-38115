
import './App.css';
import Function from './components/Function';
import List from './components/List';
import { useEffect, useState } from 'react';

function App() {

  const [state, setState] = useState([])

  useEffect(()=>{
    
    const res = fetch("https://rickandmortyapi.com/api/character")

    res.then((res)=>{
      return res.json()
    }).then((value)=>{
      setState(value.results)
    })
  },[])

  return (
    <div className="App">
      <Function items={state}></Function>
    </div>
  );
}

export default App;
