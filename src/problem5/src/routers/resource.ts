import express, { Router } from "express";
import { 
    controllerGetResource, 
    controllerCreateResource, 
    controllerUpdateResource ,
    controllerDeleteResource, 
} from "../controllers/resource";

const router: Router = express.Router();

router.get("/", controllerGetResource);

router.post("/", controllerCreateResource)

router.put("/:id", controllerUpdateResource)

router.delete("/:id", controllerDeleteResource)

export default router;