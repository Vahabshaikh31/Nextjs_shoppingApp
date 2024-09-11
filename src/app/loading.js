import { Skeleton } from "../components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-52 flex-col space-y-3">
      <Skeleton className="h-[250px] bg-black w-[500px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-8 bg-black w-[500px]" />
        <Skeleton className="h-8 bg-black w-[500px]" />
      </div>
    </div>
  );
};

export default Loading;
