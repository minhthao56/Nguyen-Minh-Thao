import express, { Router } from "express";

import { users } from '../schemas/user'
import { db } from "../db/connection";

const router: Router = express.Router();
router.get("/", async (req, resp)=>{
    const allUsers = await db.select().from(users);
    console.log(allUsers);
    resp.send("Hello World");
});

export default router;