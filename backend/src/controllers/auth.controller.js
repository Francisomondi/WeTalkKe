export const register = (req, res) => {
    res.send("Register")
}

export const login = (req, res) => {
    res.send("Login")
}
export const logout = (req, res) => {
    const {token} = req.cookies
    if (!token) {
        return res.status(400).json({message: "No token provided"})
    }    
    res.clearCookie("token")
    res.send("Logout")  
    
}   