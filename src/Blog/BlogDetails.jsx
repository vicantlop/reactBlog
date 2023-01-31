import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteBlog, fetchBlog } from "./store/blogReducer";

const BlogDetails = () => {
  const { id } = useParams();
  const { blog } = useSelector(state => state.blog)
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsPending(true)
    dispatch(fetchBlog(id))
      .unwrap()
      .then((promiseResult) => {
        setIsPending(false)
      })
      .catch((rejectedValue) => {
        setError(rejectedValue)
      })
  }, [])

  const handleClick = () => {
    console.log(id)
    dispatch(deleteBlog(id))
      .unwrap()
      .then((promiseResult) => {
        navigate('/')
      })
      .catch((rejectedValue) => {
        console.log(rejectedValue)
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