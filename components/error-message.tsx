type Props = {
  message?: string;
};

export const ErrorMessage = ({ message }: Props) => {
  if (!message) return null;

  return (
    <div className="flex items-center gap-x-3 w-full rounded p-1.5 bg-red-500/10">
      <span>⚠️</span>
      <span className="text-sm text-red-500">{message}</span>
    </div>
  );
};
