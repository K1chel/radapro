import { Loader2Icon } from "lucide-react";

const ResumeIdLoading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-105px)]">
      <Loader2Icon className="size-12 animate-spin text-muted-foreground" />
    </div>
  );
};

export default ResumeIdLoading;
