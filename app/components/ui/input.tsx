import { cn } from "../../../lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva("input w-full", {
  variants: {
    variant: {
      default: "border border-primary",
      ghost: "",
      error: "border-error focus:border-error",
    },
    shape: {
      default: "",
      rounded: "",
    },
  },
  defaultVariants: {
    variant: "default",
    shape: "default",
  },
});

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  errorMessage?: string;
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, variant, shape, label, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full relative">
        {label && <label className="text-xs">{label}</label>}
        <input
          onChange={onChange}
          className={cn(inputVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        />
        {props.errorMessage && (
          <span className="absolute -bottom-5 left-2 text-xs text-error">
            {props.errorMessage}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
