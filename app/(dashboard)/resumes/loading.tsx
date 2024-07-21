import { Skeleton } from "@/components/ui/skeleton";

const ResumesLoading = () => {
  return (
    <div className="flex flex-col gap-y-5 w-full h-full px-6 mt-8">
      <div className="flex md:justify-end w-full md:w-auto">
        <Skeleton className="w-full md:w-52 h-12" />
      </div>
      <hr />
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3 w-full h-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-[85px]" />
        ))}
      </div>
    </div>
  );
};

export default ResumesLoading;
