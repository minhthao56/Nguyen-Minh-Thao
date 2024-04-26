
import { index, pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    fullName: text('full_name'),
    phone: varchar('phone', { length: 256 }),
}, (users) => ({
    nameIdx: index("name_idx").on(users.fullName),
})
);


export const user = pgTable('resource', {
    id: serial('id').primaryKey(),
    name: text('name'),
    isAvailable: text('is_available'),
    userId: integer('user_id').references(()=> users.id),
});
