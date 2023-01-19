import NavBar from "./NavBar";
import Home from "./Home";

const Todo = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
          <Home />
      </div>
    </div>
  );
};

export default Todo;
