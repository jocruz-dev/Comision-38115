
import './App.css';
import styled from 'styled-components';
import NavBar from './components/NavBar';

function App() {

  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

  const styles = 
  {
    red:{
      color: "red"
    },
    blue: {
      color: "blue"
    }
  }
  
  const color = false

  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  );
}

export default App;
