
import { index, pgTable, serial, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
}, (users) => ({
    nameIdx: index("name_idx").on(users.fullName),
})
);


export const resource = pgTable('resource', {
    id: serial('id').primaryKey(),
    name: text('name'),
    isAvailable: text('is_available'),
    userId: integer('user_id').references(()=> users.id),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
});
