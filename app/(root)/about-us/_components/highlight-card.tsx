import React, { ReactNode } from "react";

interface HighlightCardProps {
  lightIcon: ReactNode;
  darkIcon: ReactNode;
  stat: string;
  detail: string;
}
const HighlightCard = ({
  lightIcon,
  darkIcon,
  stat,
  detail,
}: HighlightCardProps) => {
  return (
    <div className="enable-animation group flex flex-col space-y-6 py-8 px-12 border  border-neutral-200 hover:border-secondary2 bg-transparent hover:bg-secondary2 rounded-md items-center justify-center shadow-none hover:shadow-xl cursor-pointer">
      <div className="enable-animation relative bg-button group-hover:bg-white border-neutral-200/95 group-hover:border-secondary2/40 border-8  rounded-full p-2">
        <div className="enable-animation opacity-0 group-hover:opacity-100">
          {darkIcon}
        </div>
        <div className="enable-animation absolute top-2 opacity-100 group-hover:opacity-0">
          {lightIcon}
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center">
        <p className="duration-1000 text-3xl font-bold text-text2 group-hover:text-text">
          {stat}
        </p>
        <p className="duration-1000 text-base font-normal text-text2 group-hover:text-text">
          {detail}
        </p>
      </div>
    </div>
  );
};

export default HighlightCard;
