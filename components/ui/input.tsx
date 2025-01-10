import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./button";
import { EyeIcon, EyeOffIcon } from "@/icons";

const inputVariants = cva(
  "read-only:cursor-default transition-all ease-in-out duration-500 flex w-full bg-transparent text-base placeholder:text-text1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        default:
          "py-4 px-6 rounded-md border border-text1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        material:
          " h-[32px] w-full border-b border-text1 outline-none focus:border-secondary2 blur:border-text1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    const [inputType, setInputType] = React.useState(type);

    if (type === "password") {
      return (
        <div className="flex bg-neutral-50 rounded-md focus-within:ring-1 space-x-2">
          <input
            type={inputType}
            className={cn(inputVariants(), "border-none focus-visible:ring-0")}
            ref={ref}
            {...props}
          />
          <Button
            type="button"
            variant={"ghost"}
            className="p-3"
            size={"icon"}
            onClick={() => {
              if (inputType == "password") {
                setInputType("text");
              } else if (inputType == "text") {
                setInputType("password");
              }
            }}
          >
            {inputType === "password" && <EyeIcon />}
            {inputType === "text" && <EyeOffIcon />}
          </Button>
        </div>
      );
    }

    return (
      <input
        type={inputType}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
