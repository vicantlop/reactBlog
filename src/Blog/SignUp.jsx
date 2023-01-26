import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "./store/userReducer";

const SignUp = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = {firstName, lastName, email, username, password}

    dispatch(createUser(user))
  }

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
        <label>Last Name:</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)}/>
        <label>E-mail:</label>
        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        <label>Username:</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <label>Password:</label>
        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        <Link to="/login">Already have an account? Click here to Log in</Link>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
 
export default SignUp;