const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL =
  "mongodb+srv://Piyumi:piyumi19211@vehiclerentalsystem.bmnmx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

const DriverAppRouter = require("./routes/ApplicationManagement");
app.use("/ApplicationManagement", DriverAppRouter);


app.listen(PORT, () => {
  console.log("Server is running");
});
