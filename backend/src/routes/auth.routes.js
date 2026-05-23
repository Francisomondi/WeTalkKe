
import express from "express";

const router = express.Router();

import {register, login,logout, updateProfile} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getProfile } from "../controllers/auth.controller.js";
import { checkAuth } from "../controllers/auth.controller.js";


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update-profile",protectRoute, updateProfile);
router.get("/profile", protectRoute, getProfile);
router.get("/check-auth", protectRoute, checkAuth)

export default router;
