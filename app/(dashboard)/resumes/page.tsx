import { ResumeCard } from "@/components/resume-card";
import { UploadResumeButton } from "@/components/upload-resume-button";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Empty } from "./_components/empty";

const ResumesPage = async () => {
  const session = await auth();

  if (!session || !session.user?.id) return null;

  const resumes = await db.resume.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      creadtedAt: "desc",
    },
  });

  if (!resumes.length) return <Empty />;

  return (
    <div className="flex flex-col gap-y-5 w-full h-full px-6 mt-8">
      <div className="flex md:justify-end w-full md:w-auto">
        <UploadResumeButton />
      </div>
      <hr />
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    </div>
  );
};

export default ResumesPage;
