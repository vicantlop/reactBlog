import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="sign-up">
      <form>
        <label>E-mail:</label>
        <input type="email" name="email" id="email" />
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        <Link to="/login">Already have an account? Click here to Log in</Link>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
 
export default SignUp;