import express, { Router } from "express";

const router: Router = express.Router();
router.get("/", async (req, resp)=>{
    resp.send("Hello World");
});

export default router;