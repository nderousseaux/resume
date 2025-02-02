-- -------------------------------------------------------------
-- TablePlus 6.2.1(578)
--
-- https://tableplus.com/
--
-- Database: neondb
-- Generation Time: 2025-02-02 14:57:44.4080
-- -------------------------------------------------------------


DROP TABLE IF EXISTS "public"."basic";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS basic_id_seq;

-- Table Definition
CREATE TABLE "public"."basic" (
    "id" int4 NOT NULL DEFAULT nextval('basic_id_seq'::regclass),
    "name" varchar(255),
    "value" varchar(2048),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."certificate";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS certificate_id_seq;

-- Table Definition
CREATE TABLE "public"."certificate" (
    "id" int4 NOT NULL DEFAULT nextval('certificate_id_seq'::regclass),
    "name" varchar(255),
    "date" date,
    "issuer" varchar(255),
    "url" varchar(2048),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."experience";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS work_id_seq;

-- Table Definition
CREATE TABLE "public"."experience" (
    "id" int4 NOT NULL DEFAULT nextval('work_id_seq'::regclass),
    "company" varchar(255) NOT NULL,
    "position" varchar(255) NOT NULL,
    "summary" varchar(2048) NOT NULL,
    "startDate" date NOT NULL,
    "endDate" date,
    "type" varchar(255),
    "contract" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."highlight";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS highlight_id_seq;

-- Table Definition
CREATE TABLE "public"."highlight" (
    "id" int4 NOT NULL DEFAULT nextval('highlight_id_seq'::regclass),
    "text" varchar(2048) NOT NULL,
    "experience" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."interest";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hobbies_id_seq;

-- Table Definition
CREATE TABLE "public"."interest" (
    "id" int4 NOT NULL DEFAULT nextval('hobbies_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "category" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."interest_category";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hobbie_category_id_seq;

-- Table Definition
CREATE TABLE "public"."interest_category" (
    "id" int4 NOT NULL DEFAULT nextval('hobbie_category_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "order" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."language";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS language_id_seq;

-- Table Definition
CREATE TABLE "public"."language" (
    "id" int4 NOT NULL DEFAULT nextval('language_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "fluency" varchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."picture";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS pictures_id_seq;

-- Table Definition
CREATE TABLE "public"."picture" (
    "id" int4 NOT NULL DEFAULT nextval('pictures_id_seq'::regclass),
    "file" bytea NOT NULL,
    "type" varchar(255),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."profile";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS profile_id_seq;

-- Table Definition
CREATE TABLE "public"."profile" (
    "id" int4 NOT NULL DEFAULT nextval('profile_id_seq'::regclass),
    "network" varchar(255) NOT NULL,
    "username" varchar(255) NOT NULL,
    "url" varchar(1024) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."project";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS project_id_seq;

-- Table Definition
CREATE TABLE "public"."project" (
    "id" int4 NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    "name" varchar(255),
    "startDate" date,
    "endDate" date,
    "summary" varchar(2048),
    "url" varchar(2048),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."reference";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS reference_id_seq;

-- Table Definition
CREATE TABLE "public"."reference" (
    "id" int4 NOT NULL DEFAULT nextval('reference_id_seq'::regclass),
    "name" varchar(255),
    "reference" varchar(2048),
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."skill";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS skill_id_seq;

-- Table Definition
CREATE TABLE "public"."skill" (
    "id" int4 NOT NULL DEFAULT nextval('skill_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "category" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."skill_category";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS skills_category_id_seq;

-- Table Definition
CREATE TABLE "public"."skill_category" (
    "id" int4 NOT NULL DEFAULT nextval('skills_category_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "order" int4,
    PRIMARY KEY ("id")
);



-- Indices
CREATE UNIQUE INDEX work_pkey ON public.experience USING btree (id);
ALTER TABLE "public"."highlight" ADD FOREIGN KEY ("experience") REFERENCES "public"."experience"("id");
ALTER TABLE "public"."interest" ADD FOREIGN KEY ("category") REFERENCES "public"."interest_category"("id");


-- Indices
CREATE UNIQUE INDEX hobbies_pkey ON public.interest USING btree (id);


-- Indices
CREATE UNIQUE INDEX hobbie_category_pkey ON public.interest_category USING btree (id);


-- Indices
CREATE UNIQUE INDEX pictures_pkey ON public.picture USING btree (id);
ALTER TABLE "public"."skill" ADD FOREIGN KEY ("category") REFERENCES "public"."skill_category"("id");


-- Indices
CREATE UNIQUE INDEX skills_category_pkey ON public.skill_category USING btree (id);
