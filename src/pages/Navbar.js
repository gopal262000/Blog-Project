import logo from "./logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" alt="Blog-Icon" src={logo}></img>
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          className="new-blog"
          to="/create"
          style={{
            color: "#f2e6e6",
            borderRadius: "8px",
          }}
        >
          ➕ <span className="hidden-new">New</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
