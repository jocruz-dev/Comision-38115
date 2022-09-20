
import './App.css';
import Function from './components/Function';
import Class from './components/Class';
import NavBar from './components/NavBar';
import List from './components/List';

function App() {

  const arr = ["pancho", "ruben"]

  return (
    <div className="App">
      <Class name={arr[0]}/>
      <Function name={arr[1]}>
        <h1>HOLA</h1>
        <h1>BOLA</h1>
        <h1>ADIOS</h1>
      </Function>
      <List></List>
    </div>
  );
}

export default App;
