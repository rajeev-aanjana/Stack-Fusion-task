 const formController = require("./controllers/formController")
 const cors = require("cors")
 const express = require("express")
 const app = express()
 const corsOptions = {
    origin:(origin,callback)=>{
        callback(null,origin)
    }
 }
 app.use(cors(corsOptions))

app.use(express.json());


app.post("/api/submit-form",formController.add)
app.get("/api/submissions",formController.list)

 app.listen(5000,()=>{
    console.log("server started")
 })