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
    </div>
  );
}

export default NavBar;
