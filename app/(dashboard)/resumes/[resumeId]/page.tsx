import { notFound } from "next/navigation";

import { PdfRenderer } from "@/components/pdf-renderer";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

type Props = {
  params: { resumeId: string };
};

const ResumeIdPage = async ({ params: { resumeId } }: Props) => {
  const session = await auth();

  if (!session || !session.user) return null;

  const userId = session.user.id;

  if (!userId) return notFound();

  const resume = await db.resume.findFirst({
    where: {
      id: resumeId,
      userId,
    },
  });

  if (!resume) return notFound();

  return (
    <div>
      <PdfRenderer url={resume.url} />
    </div>
  );
};

export default ResumeIdPage;
