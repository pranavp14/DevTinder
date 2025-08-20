/// 
// console.log("Starting a new Project!");
const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middleware/auth");

app.use("/admin", adminAuth);

app.get("/user/login", (req, res) => {
    res.send("Welcome to the User Login Page");     
});

app.get("/admin/dashboard", (req, res) => {
    res.send("Welcome to the Admin Dashboard");
}); 

app.use("/user/data", userAuth, (req, res) => {
    res.send("get user data");
});

app.server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app;


