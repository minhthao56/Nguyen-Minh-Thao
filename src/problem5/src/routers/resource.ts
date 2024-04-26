import express, { Router } from "express";
import { 
    controllerGetResources, 
    controllerCreateResource, 
    controllerUpdateResource,
    controllerDeleteResource, 
    controllerGetDetailResource
} from "../controllers/resource";

const router: Router = express.Router();

router.get("/", controllerGetResources);

router.get("/:id", controllerGetDetailResource);

router.post("/", controllerCreateResource)

router.put("/:id", controllerUpdateResource)

router.delete("/:id", controllerDeleteResource)

export default router;