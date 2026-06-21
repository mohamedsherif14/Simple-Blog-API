const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();

const authRoute = require("./routes/auth.route");


const connectDB = require("./config/DB.config");
connectDB();


const app = express();
app.use(express.json());
app.use("/api/v1/auth" , authRoute);

const port = process.env.PORT;
app.listen(port,_=>console.log(`server started port:${port}`));
