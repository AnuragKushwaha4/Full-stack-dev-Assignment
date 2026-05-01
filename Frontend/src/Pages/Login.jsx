import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // temporary redirect
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form className="auth-form" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/">Register</Link>
      </p>
    </div>
  );
}

export default Login;