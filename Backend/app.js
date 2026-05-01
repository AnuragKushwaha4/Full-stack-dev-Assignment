const config = require("./Configs/Config")
const cookieParser = require("cookie-parser")
const CORS = require("cors")
const express = require("express")
const ConnectDB = require("./Configs/Connection")




const AuthRoute = require("./Routes/AuthRoutes")

const app = express()

ConnectDB()
const PORT = config.port;


app.use(cookieParser())
app.use(express.json())
app.use(CORS({
    origin: "http://localhost:5173",
    credentials: true
}));



app.use("/api/auth",AuthRoute)

app.get("/",(req,res)=>{
    res.json({message:"server stared"})
})


app.listen(PORT,()=>{
    console.log(`Started Server :${PORT} `)
})
