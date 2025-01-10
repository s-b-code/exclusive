import { cn } from "@/lib/utils";
import React from "react";

const DotButton = ({
  active,
  onClick,
}: {
  active?: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={() => onClick()}>
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-neutral-300",
          active && "border-2 border-white bg-secondary2"
        )}
      />
    </button>
  );
};

export default DotButton;
