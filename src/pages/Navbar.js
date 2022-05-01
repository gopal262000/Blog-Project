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
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
