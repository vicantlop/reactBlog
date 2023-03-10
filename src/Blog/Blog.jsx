import NavBar from "./NavBar";
import Home from "./Home";
import {Routes, Route} from 'react-router-dom';
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
import SignUp from "./SignUp";
import Login from "./Login";

const Blog = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<CreateBlog />}/>
            <Route path="/blogs/:id" element={<BlogDetails />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </div>
    </div>
  );
};

export default Blog;
