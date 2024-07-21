"use server";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteResume = async (resumeId: string) => {
  const session = await auth();

  if (!session || !session.user) {
    throw new Error("Unauthorized");
  }
  const userId = session.user.id;

  const resumeToDelete = await db.resume.findFirst({
    where: {
      id: resumeId,
      userId,
    },
  });

  if (!resumeToDelete) {
    throw new Error("Resume not found");
  }

  await db.resume.delete({
    where: {
      id: resumeToDelete.id,
    },
  });

  // TODO: Delete file from storage or use cron job to delete old files which are not in use

  revalidatePath("/resumes");
};
