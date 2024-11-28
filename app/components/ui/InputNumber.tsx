import { cn } from "~/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

// Define input variants using CVA
const inputVariants = cva(
  "input input-md w-full pr-6 focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]",
  {
    variants: {
      variant: {
        default: "bg-base-300/40",
        ghost: "",
        error: "bg-error/10 border-error focus:border-error",
        bordered: "input-bordered",
      },
      shape: {
        default: "",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      shape: "default",
    },
  }
);

// Define props for the number input component
interface NumberInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  errormessage?: string;
}

// Number Input Component
const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    { className, variant, shape, label, errormessage, onChange, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-2 w-full relative">
        {/* Label */}
        {label && (
          <label className="text-[.5rem] absolute left-4 top-1 text-primary-content/50">
            {label}
          </label>
        )}
        {/* Number Input */}
        <input
          type="number"
          onChange={onChange}
          className={cn(inputVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        />
        {/* Error Message */}
        {errormessage && (
          <span className="absolute -bottom-5 left-2 text-xs text-error">
            {errormessage}
          </span>
        )}
      </div>
    );
  }
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
