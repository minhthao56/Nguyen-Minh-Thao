import { Request, Response } from "express"
import { Connection } from "../db/connection";
import { users, resource } from "../schema"
import { eq, like, count } from "drizzle-orm";

export const controllerGetResources = async (req: Request, resp: Response) => {
    try {
        const page = req.query.page || 1;
        const rowPerPage = req.query.rowPerPage || 10;
        const limit = Number(rowPerPage);
        const offset = (Number(page) - 1) * Number(rowPerPage);
        const search = req.query.search || "";

        const db = req.app.get("db") as Connection

        const allResource = await db.select({
            userId: users.id,
            userFullName: users.fullName,
            userPhone: users.phone,
            resourceId: resource.id,
            resourceName: resource.name,
            isAvailable: resource.isAvailable,
            createdAt: resource.createdAt,
            updatedAt: resource.updatedAt,
        }).
            from(resource).
            where(like(resource.name, `%${search}%`)).
            leftJoin(users, eq(users.id, resource.userId)).
            limit(limit).
            offset(offset);

        const countResource = await db.select({ count: count() }).
            from(resource).
            where(like(resource.name, `%${search}%`)).
            leftJoin(users, eq(users.id, resource.userId));

        resp.status(200).json({
            data: allResource,
            pagination: {
                page: Number(page),
                rowPerPage: Number(rowPerPage),
                total: countResource
            }
        });

    } catch (error) {
        console.error("Error in controllerGetResource", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }

}


export const controllerGetDetailResource = async (req: Request, resp: Response) => {
    try {
        const db = req.app.get("db") as Connection
        const { id } = req.params;
        const numericId = Number(id);

        const findResource = await db.select({
            userId: users.id,
            userFullName: users.fullName,
            userPhone: users.phone,
            resourceId: resource.id,
            resourceName: resource.name,
            isAvailable: resource.isAvailable,
            createdAt: resource.createdAt,
            updatedAt: resource.updatedAt,
        }).
            from(resource).
            where(eq(resource.id, numericId)).leftJoin(users, eq(users.id, resource.userId));

        if (findResource.length === 0) {
            resp.status(404).json({ error: "Resource not found" });
            return;
        }

        resp.status(200).json(findResource[0]);

    } catch (error) {
        console.error("Error in controllerGetDetailResource", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }

}

export const controllerCreateResource = async (req: Request, resp: Response) => {
    try {
        const db = req.app.get("db") as Connection
        const { name, isAvailable, userId } = req.body;
        const newResource = await db.insert(resource).values({
            name: name,
            isAvailable: isAvailable,
            userId: userId
        })

        resp.status(200).json(newResource);

    } catch (error) {
        console.error("Error in controllerCreateResource", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }
}


export const controllerUpdateResource = async (req: Request, resp: Response) => {
    try {
        const db = req.app.get("db") as Connection
        const { id } = req.params;
        const { name, isAvailable, userId } = req.body;
        const numericId = Number(id);

        const findResource = await db.select().from(resource).where(eq(resource.id, numericId));

        if (findResource.length === 0) {
            resp.status(404).json({ error: "Resource not found" });
            return;
        }
        const updatedAt = new Date();
        const updatedResource = await db.update(resource).set({
            name: name,
            isAvailable: isAvailable,
            userId: userId,
            updatedAt: updatedAt
        }).where(eq(resource.id, numericId));

        resp.status(200).json(updatedResource);

    } catch (error) {
        console.error("Error in controllerUpdateResource", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }
}

export const controllerDeleteResource = async (req: Request, resp: Response) => {
    try {
        const db = req.app.get("db") as Connection
        const { id } = req.params;
        const numericId = Number(id);

        const findResource = await db.select().from(resource).where(eq(resource.id, numericId));

        if (findResource.length === 0) {
            resp.status(404).json({ error: "Resource not found" });
            return;
        }

        const deletedResource = await db.delete(resource).where(eq(resource.id, numericId));

        resp.status(200).json(deletedResource);

    } catch (error) {
        console.error("Error in controllerDeleteResource", error);
        resp.status(500).json({ error: "Internal Server Error" });
    }
}