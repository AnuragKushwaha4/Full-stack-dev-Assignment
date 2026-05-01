import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form className="auth-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Phone" />
        <input type="text" placeholder="Role" />

        <button type="submit">Register</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;