import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogList from "./BlogList";
import { fetchBlogs } from "./store/blogReducer";

const Home = () => {
  const { blog: blogs } = useSelector((state) => state.blog);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsPending(true)
    dispatch(fetchBlogs())
      .unwrap()
      .then((originalPromisedResult) => {
        setIsPending(false)
      })
      .catch((rejectedValue) => {
        setError(rejectedValue)
      });
  }, [dispatch]);

  return (
    <div className="home">
      { error && <div>{error}</div>}
      { isPending && <div>Loading...</div>}
      {blogs[0] && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
