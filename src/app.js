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
    try {
        // Simulating some admin dashboard logic        
    res.send("Welcome to the Admin Dashboard");
    } catch (error) {
        res.status(500).send("Internal Server Error");          
    }
}); 

app.use("/user/data", userAuth, (req, res) => {
    res.send("get user data");
});

app.use("/", (err, req, res, next ) => {
    if (err) {
        console.error("Error occurred:", err);          
        // res.status(500).send("Internal Server Error");
    } else {  
        next();
        // res.send("Welcome to the Home Page");
    }   
});

app.use("/yes", ( req, res ) => {
    res.send("Yes, this is a response from the /yes route");
});

app.server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = app;


