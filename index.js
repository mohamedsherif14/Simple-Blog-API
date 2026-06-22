const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();

const authRoute = require("./routes/auth.route");
const postRoute = require("./routes/post.route");


const connectDB = require("./config/DB.config");
connectDB();


const app = express();
app.use(express.json());
app.use("/api/v1/auth" , authRoute);
app.use("/api/v1/post" , postRoute);

const port = process.env.PORT;
app.listen(port,_=>console.log(`server started port:${port}`));
