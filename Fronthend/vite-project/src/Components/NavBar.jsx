import { Link } from "react-router-dom";
import "../style/NavBar.css";
import { useNavigate, useParams } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="app-navbar">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="app-navbar__brand">Student Details</div>
      </Link>
      <div className="app-navbar__links">
        <Link className="app-navbar__link" to="/">
          Student List
        </Link>
        <Link className="app-navbar__link" to="/add-student">
          Add Student
        </Link>
        <Link className="app-navbar__link" to="/search-student">
          Search Student
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
