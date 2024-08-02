"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadDropzone } from "@/components/upload-dropzone";
import { PlusCircleIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export const UploadResumeButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full md:w-auto font-semibold group">
          <PlusCircleIcon className="mr-2 size-6 group-hover:scale-105 group-hover:rotate-6 transition" />
          Upload Resume
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle />
        <DialogDescription />
        <UploadDropzone setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
};
