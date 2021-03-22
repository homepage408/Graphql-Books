const jwt = require("jsonwebtoken");
const SECRET_KEY = `tester`;

const generateJwt = (email, password) => {
    const data = {
        id: 1,
        email: `admin@mail`,
        username: `admin`,
    };
    const token = jwt.sign(data, SECRET_KEY);
    console.log({ token, ...data });
    return { token, ...data };
};

const verifyJwt = (token) => {
    const decoded = jwt.verify(token.split(" ")[1], SECRET_KEY);
    console.log(decoded);
    return decoded;
};

module.exports = {
    generateJwt,
    verifyJwt,
};
