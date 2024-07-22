"use client";

import { Resume } from "@prisma/client";
import { MousePointerClickIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

import { deleteResume } from "@/actions/delete-resume";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn, getTime } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { FormEvent, useTransition } from "react";
import { toast } from "sonner";
import { useConfirm } from "@/hooks/use-confirm";

type Props = {
  resume: Resume;
};

export const ResumeCard = ({ resume }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const [ConfirmDialog, confirm] = useConfirm(
    "Delete Resume",
    "Are you sure you want to delete this resume?"
  );

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const ok = await confirm();

    if (ok) {
      try {
        startTransition(async () => {
          await deleteResume(resume.id).then(() => {
            toast.success("Resume deleted successfully");
            router.refresh();
          });
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Card
      className={cn(
        "bg-secondary shadow drop-shadow-sm hover:drop-shadow-lg transition-all",
        isPending && "opacity-50 pointer-events-none cursor-not-allowed"
      )}
    >
      <Link href={`/resumes/${resume.id}`}>
        <CardHeader className="bg-white dark:bg-black rounded-t-md py-2">
          <CardTitle className="truncate">{resume.name}</CardTitle>
        </CardHeader>
      </Link>
      <div className="py-1 border-t flex items-center justify-between w-full px-3">
        <div className="flex items-center gap-x-2">
          <p className="text-muted-foreground md:text-sm text-xs font-medium tracking-tight">
            {getTime(resume.creadtedAt)}
          </p>
          <div className="w-px h-4 bg-muted-foreground/50" />
          <Button variant="link" size="sm" className="group">
            <MousePointerClickIcon className="size-4 mr-1.5 group-hover:scale-125 group-hover:rotate-6 transition" />
            <Link href={`/resumes/${resume.id}`}>View Resume</Link>
          </Button>
        </div>
        <form onSubmit={handleDelete}>
          <Button
            size="icon"
            variant="destructive"
            className="h-auto w-auto p-2 rounded-md"
          >
            <Trash2Icon className="size-4" />
          </Button>
        </form>
      </div>
      <ConfirmDialog />
    </Card>
  );
};
