import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Victor's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: "10px"
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default NavBar;