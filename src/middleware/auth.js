const adminAuth = (req, res, next) => {
    const token = "abcd1234"; // Example token for admin authentication
    const isAuthenticated = "abcd1234" === token; // Simulating authentication check
    if (isAuthenticated) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).send("Forbidden: Admin access required");
    }
}

const userAuth = (req, res, next) => {
    const token = "abcd1234"; // Example token for admin authentication
    const isAuthenticated = "abcd1234" === token; // Simulating authentication check
    if (isAuthenticated) {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).send("Forbidden: Admin access required");
    }
}

module.exports = {
    adminAuth, userAuth
};

