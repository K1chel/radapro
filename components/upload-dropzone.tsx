"use client";

import { CloudIcon, FileIcon, Loader2Icon } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { toast } from "sonner";

import { Progress } from "@/components/ui/progress";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const UploadDropzone = ({ setIsOpen }: Props) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const router = useRouter();

  const { startUpload } = useUploadThing("freePlanUploader");

  const startSimulatedProgress = () => {
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 95) {
          clearInterval(interval);
          return prevProgress;
        }
        return prevProgress + 5;
      });
    }, 500);

    return interval;
  };

  return (
    <Dropzone
      multiple={false}
      onDrop={async (acceptedFile) => {
        setIsUploading(true);

        const progressInterval = startSimulatedProgress();

        const res = await startUpload(acceptedFile);

        if (!res) {
          return toast.error("Something went wrong, please try again later.");
        }

        const [fileResponse] = res;

        const key = fileResponse?.key;

        if (!key) {
          return toast.error("Something went wrong, please try again later.");
        }

        clearInterval(progressInterval);
        setUploadProgress(100);

        toast.success("Resume uploaded successfully!");
        setIsOpen(false);
        router.refresh();
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 dark:border-neutral-700 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-950 transition"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <CloudIcon className="h-6 w-6 text-neutral-500 dark:text-neutral-100 mb-2" />
                <p className="mb-2 text-sm text-neutral-700 dark:text-neutral-100">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PDF (up to 4MB)
                </p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white dark:bg-black/50 flex items-center rounded-md overflow-hidden outline outline-[1px] outline-neutral-200 divide-x divide-neutral-200 dark:outline-neutral-700 dark:divide-neutral-700">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <FileIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}

              {isUploading ? (
                <div className="w-full mt-4 max-w-xs mx-auto">
                  <Progress
                    indicatorColor={
                      uploadProgress === 100 ? "bg-green-500" : ""
                    }
                    value={uploadProgress}
                    className="h-1 w-full bg-neutral-200 dark:bg-neutral-700"
                  />
                  {uploadProgress === 100 ? (
                    <div className="flex gap-1 items-center justify-center text-sm text-muted-foreground text-center pt-2">
                      <Loader2Icon className="h-3 w-3 animate-spin" />
                      Redirecting...
                    </div>
                  ) : null}
                </div>
              ) : null}

              <input
                {...getInputProps()}
                type="file"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};
