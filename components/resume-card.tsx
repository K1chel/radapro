import { Resume } from "@prisma/client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";

type Props = {
  resume: Resume;
};

export const ResumeCard = ({ resume }: Props) => {
  return (
    <Card className="bg-secondary shadow drop-shadow-sm hover:drop-shadow-lg transition-all">
      <Link href={`/resumes/${resume.id}`}>
        <CardHeader className="bg-white dark:bg-black rounded-t-md py-2">
          <CardTitle className="truncate">{resume.name}</CardTitle>
        </CardHeader>
        <div className="py-1 border-t flex items-center justify-between w-full px-3">
          <p className="text-muted-foreground text-sm">created at</p>
          <form>
            <Button
              size="icon"
              variant="destructive"
              className="h-auto w-auto p-2 rounded-md"
            >
              <Trash2Icon className="size-4" />
            </Button>
          </form>
        </div>
      </Link>
    </Card>
  );
};
