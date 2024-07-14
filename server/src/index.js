const mongoose = require("mongoose");
const express = require("express")
const cors = require("cors")
const {register, login, getMe} = require("./controllers/user")
const {registrationValidator, loginValidator} = require("./validations/auth")
const handleValidationsErrors = require("./utils/handleValidationsErrors")
const checkAuth = require("./utils/checkAuth")

mongoose
  .connect(
    "mongodb+srv://fushersf2:qwerty123@dailytrack.xga6oag.mongodb.net/?retryWrites=true&w=majority&appName=dailyTrack"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  });

const app = express()

app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

app.post("/api/auth/register", registrationValidator, handleValidationsErrors, register)
app.post("/api/auth/login", loginValidator, handleValidationsErrors, login)
app.get("/api/auth/me", checkAuth, getMe)


app.listen(5000, () => console.log("Server started on port 5000"))