import {Link} from "react-router-dom";
import '../style/NavBar.css';

function Navbar() {
    return (
        <nav className="app-navbar">
            <div className="app-navbar__brand">Student Details</div>
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
    )
}

export default Navbar;