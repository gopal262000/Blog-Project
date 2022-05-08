import logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <div> */}
        <img className="logo" alt="Blog-Icon" src={logo}></img>
      {/* </div> */}
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          className="new-blog"
          href="/create"
          style={{
            color: "#f2e6e6",
            borderRadius: "8px",
          }}
        >
          ➕ <span className="hidden-new">New</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
