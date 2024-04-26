import 'dotenv/config';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { createConnectionMigrations } from './connection';



async function main() {
    try {
        const db = createConnectionMigrations();
        await migrate(db, { migrationsFolder: './drizzle' });
        console.log('Migration completed');
    } catch (error) {
        console.error('Migration failed', error);
    }
    
}

main();