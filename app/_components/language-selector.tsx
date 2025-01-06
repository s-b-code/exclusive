"use client";

import { cn } from "@/lib/utils";
import { languages } from "@/static-data";
import { useClickAway } from "@uidotdev/usehooks";
import Image from "next/image";
import React, { RefObject, useState } from "react";

const LanguageButton = ({
  language,
  isActive,
  onClick,
}: {
  language: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <button className="flex flex-row gap-1 px-2" onClick={() => onClick()}>
      <Image
        width={24}
        height={24}
        src={`/icons/${isActive ? "radio-on-white" : "radio-off-white"}.svg`}
        alt="radio-button-icon"
      />
      {language}
    </button>
  );
};

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0]
  );
  const ref = useClickAway(() => {
    setIsOpen(false);
  }) as RefObject<HTMLDivElement | null>;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex space-x-2 w-32 items-center justify-center"
      >
        <span>{selectedLanguage}</span>
        <span>
          <Image
            src={"/icons/drop-down.svg"}
            height={24}
            width={24}
            alt="drop-down-icon"
            className={cn(
              "transition duration-300 ease-in-out",
              isOpen && "rotate-180"
            )}
          />
        </span>
      </button>
      <div
        className={cn(
          "absolute z-50 bg-button overflow-hidden w-full shadow-md",
          "transition-all duration-300 ease-in-out",
          isOpen ? "h-32" : "h-0"
        )}
      >
        <div className="mt-4 w-full flex flex-col space-y-3">
          {languages.map((language) => (
            <LanguageButton
              key={language}
              isActive={language == selectedLanguage}
              language={language}
              onClick={() => setSelectedLanguage(language)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
