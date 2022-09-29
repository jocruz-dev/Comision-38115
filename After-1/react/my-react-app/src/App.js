import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import { useState, useEffect } from 'react';
import FetchData from './utils/FetchData';

function App() {

const [loading, setLoading] = useState(true)
const [state, setState] = useState({
  items:[]
})

useEffect(()=>{
  FetchData(true).then((value)=>{
    setState(value)
    setLoading(false)
  }).catch((value)=>{
    setState(value)
    setLoading(false)
  })
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
