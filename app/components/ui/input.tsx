import { cn } from "../../../lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva("input w-full border border-primary", {
  variants: {
    variant: {
      default: "",
      ghost: "",
      error: "",
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
}
const Input = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, variant, shape, label, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-xs">{label}</label>}
        <input
          onChange={onChange}
          className={cn(inputVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
