import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  children: React.ReactNode;
  side: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  className?: string;
};

export const ActionTooltip = ({
  children,
  name,
  side,
  className,
  sideOffset,
}: Props) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          sideOffset={sideOffset}
          side={side}
          className={cn("", className)}
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
