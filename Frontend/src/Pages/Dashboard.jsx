import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="dashboard">
  <h1>You are Logged In</h1>
  <button onClick={handleLogout}>Logout</button>
</div>
  );
}

export default Dashboard;