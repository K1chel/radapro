"use client";

import { useProModal } from "@/hooks/use-pro-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useCurrentUser } from "@/hooks/use-current-user";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SparkleIcon } from "lucide-react";

export const ProModal = () => {
  const { isOpen, onClose } = useProModal();
  const { isLoading, user } = useCurrentUser();

  if (isLoading) return null;

  if (!user) notFound();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <div className="space-y-10">
          <DialogHeader>
            <DialogTitle>Pro</DialogTitle>
            <DialogDescription>You have 5 free generations</DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex flex-col items-center justify-center gap-y-5 w-full md:max-w-60 mx-auto">
            <div className="w-full flex items-center justify-center flex-col gap-y-2">
              <span className="text-lg font-medium capitalize">
                {user.freeGenrations}/5 free generations
              </span>
              <Progress
                className="bg-primary/20"
                value={user.freeGenrations * 20}
              />
            </div>
            <Button className="w-full group" variant="pro" size="lg">
              <SparkleIcon className="size-4 mr-2 fill-white md:group-hover:rotate-12 transition" />
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
