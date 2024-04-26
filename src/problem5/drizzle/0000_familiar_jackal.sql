CREATE TABLE IF NOT EXISTS "resource" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"is_available" text,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(256)
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "users" ("full_name");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "resource" ADD CONSTRAINT "resource_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
