CREATE TYPE "public"."household_member_role" AS ENUM('ADMIN', 'ADULT', 'CHILD');--> statement-breakpoint
CREATE TABLE "household_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"householdId_id" uuid NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "household_member_role" DEFAULT 'ADULT' NOT NULL,
	"timezone" varchar(64) DEFAULT 'Europe/Budapest' NOT NULL,
	"joined_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "household_members_household_user_unique" UNIQUE("householdId_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "households" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(64) NOT NULL,
	"timezone" varchar(64) DEFAULT 'Europe/Budapest' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(32) NOT NULL,
	"password" varchar(255),
	"avatarUrl" text,
	"timezone" varchar(64) NOT NULL,
	"locale" varchar(16) DEFAULT 'hu-HU' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"deleted_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "household_members" ADD CONSTRAINT "household_members_householdId_id_households_id_fk" FOREIGN KEY ("householdId_id") REFERENCES "public"."households"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "household_members" ADD CONSTRAINT "household_members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;