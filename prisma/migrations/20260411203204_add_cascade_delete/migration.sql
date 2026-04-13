-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_resumeId_fkey";

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_resumeId_fkey" FOREIGN KEY ("resumeId") REFERENCES "Resume"("id") ON DELETE CASCADE ON UPDATE CASCADE;
