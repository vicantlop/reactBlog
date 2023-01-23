import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/userReducer";

const Login = () => {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="user">the user is {user}</div>
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        <button onClick={() => dispatch(getUser())}>Login</button>
      </form>
    </div>
  );
}
 
export default Login;