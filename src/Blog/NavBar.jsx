import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Victor's Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "10px"
        }}>New Blog</Link>
        {!loggedIn && <Link to='/signup'>Sign Up</Link>}
      </div>
    </nav>
  );
}
 
export default NavBar;