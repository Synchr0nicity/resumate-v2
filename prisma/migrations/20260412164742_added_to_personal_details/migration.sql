-- AlterTable
ALTER TABLE "PersonalDetails" ADD COLUMN     "reference" TEXT;

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "label" TEXT,
    "url" TEXT NOT NULL,
    "personalId" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "PersonalDetails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
