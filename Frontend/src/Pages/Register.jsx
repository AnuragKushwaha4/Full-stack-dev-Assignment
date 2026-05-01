import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../Http/index";

function Register(){

const navigate = useNavigate();

const [form,setForm] = useState({
name:"",
email:"",
password:"",
phone:"",
role:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
e.preventDefault();
try{

const res = await registerUser(form);

alert(res.data.message);

navigate("/login");

}
catch(error){

alert(error.response?.data?.message || "Register failed")

}

}

return(

<div className="auth-container">

<h2>Create Account</h2>

<form className="auth-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Full Name"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email Address"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<input
type="text"
name="phone"
placeholder="Phone Number"
onChange={handleChange}
/>

{/* Role Selection */}

<div className="role-container">

<p className="role-title">Select Role</p>

<div className="role-options">

<label className="role-option">
<input
type="radio"
name="role"
value="admin"
onChange={handleChange}
/>
<span>Admin</span>
</label>

<label className="role-option">
<input
type="radio"
name="role"
value="user"
onChange={handleChange}
/>
<span>User</span>
</label>

</div>

</div>

<button type="submit">
Create Account
</button>

</form>

<p className="auth-switch">
Already have an account? <Link to="/login">Login</Link>
</p>

</div>

)

}

export default Register