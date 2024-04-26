
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/drizzle'
export const createConnectionQuery = () => {
    const client = postgres(connectionString, { prepare: false })
    const db = drizzle(client);
    return db;
}

export type Connection = ReturnType<typeof createConnectionQuery>;

export const createConnectionMigrations = () => {
    const migrationClient = postgres(connectionString, { max: 1 });
    const db = drizzle(migrationClient);
    return db;
}
        