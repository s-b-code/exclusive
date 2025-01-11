import React from "react";

const SectionIntroHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-8 w-2 md:h-10 md:w-5 rounded-md bg-secondary2" />
      <h2 className="max-lg:text-sm text-secondary2 font-semibold">{title}</h2>
    </div>
  );
};

export default SectionIntroHeader;
