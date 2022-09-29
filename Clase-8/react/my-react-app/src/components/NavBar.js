import {Link, NavLink} from "react-router-dom"

function NavBar() {
  const date = new Date()
  return (
    <div>
      <button>
        <Link to={`/`}>HOME</Link>
      </button>
      <button>
        <Link to={`/function`}>LIST</Link>
      </button>
      <button>
        <NavLink to={`/items/${date.getDate()-20}`}>LIST</NavLink>
      </button>
    </div>
  );
}

export default NavBar;
