import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const SECRET = process.env.SECRET;
  return jwt.sign({ email: user.email, name: user.name }, SECRET, {
    expiresIn: "1h",
  });
};

export const verifyToken = (token) => {
  const SECRET = process.env.SECRET;
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded && decoded.email;
  } catch (err) {
    console.log("Invalid Token ", err);
    throw err;
  }
};
