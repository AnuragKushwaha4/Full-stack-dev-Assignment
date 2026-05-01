import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

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
alert(error.response?.data?.message || "Error registering");
}

}

return(

<div className="auth-container">

<h2>Register</h2>

<form className="auth-form" onSubmit={handleSubmit}>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
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
placeholder="Phone"
onChange={handleChange}
/>

<input
type="text"
name="role"
placeholder="Role"
onChange={handleChange}
/>

<button type="submit">
Register
</button>

</form>

<p>
Already have account? <Link to="/login">Login</Link>
</p>

</div>

)

}

export default Register