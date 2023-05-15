import { Router } from "express";
import UserRoutes from "./user.routes";

const router = Router();

router.use(UserRoutes);
router.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

export default router;
