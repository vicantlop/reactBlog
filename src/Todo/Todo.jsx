import NavBar from "./NavBar";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";

const Todo = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<CreateBlog />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
          </Routes>
      </div>
    </div>
  );
};

export default Todo;
