import express from "express"

const router = express.Router();

import { createMessage, getMessages,getUsersForSidebar, sendMessage } from "../controllers/messages.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

router.get("/users", protectRoute, getUsersForSidebar);
router.post("/create/:id", protectRoute, createMessage);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router