import { CircleXIcon } from "lucide-react";

type Props = {
  message?: string;
};

export const ErrorMessage = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-3 w-full rounded-md p-3 bg-red-500/10">
      <CircleXIcon className="size-4 text-red-500" />
      <span className="text-sm text-red-500">{message}</span>
    </div>
  );
};
