import jwt from "jsonwebtoken";
 
export const generateToken = (userId, res) => {
    const payload = {
        id: userId,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "strict",
    });
};  