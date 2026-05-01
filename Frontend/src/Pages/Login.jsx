import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from "../Http/index";

function Login(){

const navigate = useNavigate();

const [form,setForm] = useState({
email:"",
password:""
});

const handleChange = (e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async(e)=>{
e.preventDefault();

try{

const res = await loginUser(form);

alert(res.data.message);

navigate("/dashboard");

}
catch(error){

alert(error.response?.data?.message || "Login failed");

}

}

return(

<div className="auth-container">

<h2>Login</h2>

<form className="auth-form" onSubmit={handleSubmit}>

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

<button type="submit">
Login
</button>

</form>

<p>
Don't have account? <Link to="/">Register</Link>
</p>

</div>

)

}

export default Login