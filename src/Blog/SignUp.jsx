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
        <button>Sign Up</button>
      </form>
    </div>
  );
}
 
export default SignUp;