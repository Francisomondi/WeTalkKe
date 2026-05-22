
import express from "express";

const router = express.Router();

import {register, login,logout, updateProfile} from "../controllers/auth.controller.js";


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile",protectRoute, updateProfile);

export default router;
