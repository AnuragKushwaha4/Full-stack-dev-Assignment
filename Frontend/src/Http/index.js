import axios from "axios"

const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})


// Auth APIs end points:



const loginUser = (data)=> api.post("/auth/login",data);
const registerUser =(data)=>api.post("/auth/register",data);
const logoutUser =()=>api.post("/auth/logout")