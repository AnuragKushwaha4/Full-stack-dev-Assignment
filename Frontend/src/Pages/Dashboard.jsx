import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/authApi";

function Dashboard(){

const navigate = useNavigate();

const handleLogout = async()=>{

try{

await logoutUser();

navigate("/login");

}
catch(error){

alert("Logout failed");

}

}

return(

<div className="dashboard">

<h1>You are Logged In</h1>

<button onClick={handleLogout}>
Logout
</button>

</div>

)

}

export default Dashboard