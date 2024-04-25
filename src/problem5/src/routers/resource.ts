import express, { Router } from "express";

const router: Router = express.Router();
router.get("/", (req, resp)=>{
    resp.send("Hello World");
});

export default router;