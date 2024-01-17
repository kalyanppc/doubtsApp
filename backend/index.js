const express = require("express");
const app = express();
const cors = require('cors');
const BodyParser = require ("body-parser");
const adminRouter = require ("./routes/admin");
const studentRouter = require("./routes/student")

app.use(cors());
app.use(BodyParser.json());
app.use("/admin",adminRouter);
app.use("/student",studentRouter);

app.listen(3000,()=>{
      console.log("The backend has started at port 3000");
});