"use client";
import { useId } from "react";
import { cn } from "./lib/utils";
import { ClassNameValue } from "tailwind-merge";
import Image from "next/image";

export const StarIcon = ({ percentage = 0 }: { percentage?: number }) => {
  const clipPathId = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
    >
      {/* Define a clip path based on percentage */}
      <defs>
        <clipPath id={clipPathId}>
          <rect width={`${(percentage / 100) * 20}`} height="20" />
        </clipPath>
      </defs>

      {/* Background Star (Empty) */}
      <path
        fill="#E0E0E0"
        d="M14.673 7.172c1.07-.81.498-2.517-.845-2.517H11.4a1.4 1.4 0 0 1-1.337-.986l-.724-2.343C8.93.011 7.069.011 6.662 1.326L5.938 3.67a1.4 1.4 0 0 1-1.337.986H2.13c-1.339 0-1.914 1.698-.852 2.512l2.117 1.62a1.4 1.4 0 0 1 .487 1.522l-.769 2.512c-.399 1.302 1.109 2.35 2.19 1.521l1.846-1.414a1.4 1.4 0 0 1 1.702 0l1.83 1.401c1.083.83 2.592-.221 2.189-1.524l-.78-2.522a1.4 1.4 0 0 1 .493-1.53l2.09-1.581Z"
      />

      {/* Foreground Star (Filled according to percentage) */}
      <path
        fill="#FFAD33"
        d="M14.673 7.172c1.07-.81.498-2.517-.845-2.517H11.4a1.4 1.4 0 0 1-1.337-.986l-.724-2.343C8.93.011 7.069.011 6.662 1.326L5.938 3.67a1.4 1.4 0 0 1-1.337.986H2.13c-1.339 0-1.914 1.698-.852 2.512l2.117 1.62a1.4 1.4 0 0 1 .487 1.522l-.769 2.512c-.399 1.302 1.109 2.35 2.19 1.521l1.846-1.414a1.4 1.4 0 0 1 1.702 0l1.83 1.401c1.083.83 2.592-.221 2.189-1.524l-.78-2.522a1.4 1.4 0 0 1 .493-1.53l2.09-1.581Z"
        clipPath={`url(#${clipPathId})`}
      />
    </svg>
  );
};

export const ArrowIcon = ({ className }: { className?: ClassNameValue }) => (
  <div className={cn("group", className)}>
    <Image
      src={"/icons/arrow-right-black.svg"}
      width={24}
      height={24}
      alt="arrow icon"
      className="group-hover:hidden"
    />
    <Image
      src={"/icons/arrow-right-black-bold.svg"}
      width={24}
      height={24}
      alt="arrow icon"
      className="hidden group-hover:block "
    />
  </div>
);

export const EyeIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-eye"
  >
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const EyeOffIcon = ({ ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-eye-off"
  >
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
    <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
    <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
    <path d="m2 2 20 20" />
  </svg>
);
