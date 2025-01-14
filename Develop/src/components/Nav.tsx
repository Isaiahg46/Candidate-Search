import {useLocation, Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={currentPage === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link to="../pages/SavedCandidates" className={currentPage === '/search' ? 'active' : ''}>Potential Candidates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
