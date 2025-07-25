CREATE SEQUENCE "public"."patient_id_seq"
   START WITH 1
   INCREMENT BY 1
   MINVALUE 1
   MAXVALUE 2147483647
   CACHE 1;

CREATE TABLE "public"."patient"(
   "id" integer DEFAULT nextval('public.patient_id_seq'::regclass) NOT NULL,
   "crId" character varying(150) NOT NULL,
   "nationalId" character varying(150) NOT NULL,
   "shaNumber" character varying(150) NOT NULL,
   "householdNumber" character varying(150) NOT NULL,
   "walletId" character varying(150) NOT NULL,
   "family" character varying(150) NOT NULL,
   "given" character varying(150) NOT NULL,
   "birthDate" timestamp without time zone NOT NULL,
   "gender" character varying(150) NOT NULL,
   "phoneNumber" character varying(150) NOT NULL,
   "county" character varying(150) NOT NULL,
   "subCounty" character varying(150) NOT NULL,
   "ward" character varying(150) NOT NULL,
   "village" character varying(150) NOT NULL,
   "uuid" character varying NOT NULL,
   "otp" character varying(10) NOT NULL,
   "createdAt" timestamp without time zone,
   CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id")
);