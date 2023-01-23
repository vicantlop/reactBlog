const Login = () => {
  return (
    <div className="login">
      <form>
        <label>Username:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" name="password" id="password" />
        <button>Login</button>
      </form>
    </div>
  );
}
 
export default Login;