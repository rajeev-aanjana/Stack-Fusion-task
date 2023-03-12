const formController = require("./controllers/formController");
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();
const corsOptions = {
  origin: (origin, callback) => {
    callback(null, origin);
  },
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(path.join(__dirname,"/public")))
app.get("/api", (req, res) => {
  res.json({
    success: true,
    version: "v1",
    message: "Backend for Stack Fusion Task.",
  });
});

app.post("/api/submit-form", formController.add);
app.get("/api/submissions", formController.list);

app.get("/*",(req,res)=>{   
    res.sendFile(path.join(__dirname,"/public/index.html"))
})

app.listen(5000, () => {
  console.log("server started");
});
