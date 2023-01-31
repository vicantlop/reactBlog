import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    }
  }, [user]);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>{user.firstName}'s Blog</h1>
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "10px",
          }}
        >
          New Blog
        </Link>
        {!loggedIn ? (
          <Link to="/signup">Sign Up</Link>
        ) : (
          <Link
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "10px",
            }}
          >
            {user.firstName[0].toUpperCase() + user.lastName[0].toUpperCase()}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
