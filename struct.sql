-- -------------------------------------------------------------
-- TablePlus 6.2.1(578)
--
-- https://tableplus.com/
--
-- Database: neondb
-- Generation Time: 2025-02-01 20:36:16.3190
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

DROP TABLE IF EXISTS "public"."formation";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS formation_id_seq;

-- Table Definition
CREATE TABLE "public"."formation" (
    "id" int4 NOT NULL DEFAULT nextval('formation_id_seq'::regclass),
    "name" bpchar(255) NOT NULL,
    "level" bpchar(255) NOT NULL,
    "place" bpchar(255) NOT NULL,
    "start-date" date NOT NULL,
    "end-date" date NOT NULL,
    "description" bpchar(2048) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."hobbie";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hobbies_id_seq;

-- Table Definition
CREATE TABLE "public"."hobbie" (
    "id" int4 NOT NULL DEFAULT nextval('hobbies_id_seq'::regclass),
    "name" bpchar(255) NOT NULL,
    "type" int4,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."hobbie_category";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hobbie_category_id_seq;

-- Table Definition
CREATE TABLE "public"."hobbie_category" (
    "id" int4 NOT NULL DEFAULT nextval('hobbie_category_id_seq'::regclass),
    "name" bpchar(255) NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE IF EXISTS "public"."language";
-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS language_id_seq;

-- Table Definition
CREATE TABLE "public"."language" (
    "id" int4 NOT NULL DEFAULT nextval('language_id_seq'::regclass),
    "name" bpchar(255) NOT NULL,
    "level" bpchar(255) NOT NULL,
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

ALTER TABLE "public"."hobbie" ADD FOREIGN KEY ("type") REFERENCES "public"."hobbie_category"("id");


-- Indices
CREATE UNIQUE INDEX hobbies_pkey ON public.hobbie USING btree (id);


-- Indices
CREATE UNIQUE INDEX pictures_pkey ON public.picture USING btree (id);
