import { UploadResumeButton } from "@/components/upload-resume-button";
import { ArrowBigDownDashIcon, GhostIcon } from "lucide-react";

export const Empty = () => {
  return (
    <div className="px-6 mt-32 w-full flex flex-col items-center gap-y-3">
      <GhostIcon className="size-8 text-muted-foreground" />
      <h2 className="text-2xl font-semibol text-muted-foreground">
        No resumes yet.
      </h2>
      <span className="text-lg font-medium">Upload your first resume</span>
      <ArrowBigDownDashIcon className="size-8 text-primary" />
      <UploadResumeButton />
    </div>
  );
};
