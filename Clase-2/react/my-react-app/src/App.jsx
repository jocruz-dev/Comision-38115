import logo from './logo.svg';
import './App.css';

function App() {

  let texto = "HOLA BOLA"

  const styles = {
    backgroundColor: "red"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={styles}>
          Coder House {texto}
        </p>
      </header>
    </div>
  );
}

export default App;
