import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          tekSkillDev
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link" aria-current="page" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/add-books/:id">
              Add Books
            </NavLink>
            <NavLink className="nav-link" to="/edit-books/:id">
              Edit Book
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;