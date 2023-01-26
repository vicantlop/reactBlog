import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {
  const { id } = useParams();
  const {data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id)

  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:3000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>...Loading</div>}
      {error && <div>{error}</div>}
      {blog && <div>
        <h2>{blog.title}</h2>
        <h4>Written by {blog.author}</h4>
        <p>{blog.body}</p>
        <button onClick={handleClick}>Delete</button>
      </div>}
    </div>
  );
}
 
export default BlogDetails;