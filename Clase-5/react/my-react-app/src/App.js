
import './App.css';
import NavBar from './components/NavBar';
import Function from './components/Function';
import Class from './components/Class';
import List from './components/List';

function App() {

  const arr = ["pancho", "ruben"]

  const aux = ()=> <h2>RENDER</h2>

  return (
    <div className="App">
      <Class></Class>
      <Function render={aux}></Function>
    </div>
  );
}

export default App;
