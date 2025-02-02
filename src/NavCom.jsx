import { Link } from "react-router-dom";
import "./styles/nav.css";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/TicTac">
        Tic-Tac-Toe
      </Link>
      <Link className="navLink" to="/CustomeHook">
        Custome Hook
      </Link>
      <Link className="navLink" to="/UseReducer">
        useState/useReducer
      </Link>
      <Link className="navLink" to="/UseEffect">
      useEffect/useLayoutEffect
      </Link>
      <Link className="navLink" to="/UseRef">
      useRef
      </Link>
      <Link className="navLink" to="/UseContext">
      useContext
      </Link>
      
    </nav>
  );
};

export default NavBar;
