import { useState } from "react";
import { useNavigate } from "react-router-dom"

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true)

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIsPending(false)
    })

    navigate('/')
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog title:</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label htmlFor="">Blog title:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label htmlFor="">Blog author:</label>
        <select onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {isPending ? <button disabled>adding blog...</button> : <button>Add Blog</button>}
      </form>
    </div>
  );
};

export default CreateBlog;
