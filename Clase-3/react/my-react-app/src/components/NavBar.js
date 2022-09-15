
import styled from 'styled-components';

function NavBar() {

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
    <div>
      <h1>NAVBAR</h1>
    </div>
  );
}

export default NavBar;
