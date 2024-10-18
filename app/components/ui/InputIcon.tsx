import { cn } from "../../../lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const inputVariants = cva("input w-full flex items-center gap-2", {
  variants: {
    variant: {
      default: "",
      ghost: "",
      error: "border-error focus:border-error",
      bordered: "input-bordered",
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
  errormessage?: string;
  icon: React.ReactElement;
}
const InputIcon = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, variant, shape, onChange, ...props }, ref) => {
    return (
      <label className="form-control w-full relative z-0">
        <label className={cn(inputVariants({ variant, shape, className }))}>
          {props.icon}
          <input onChange={onChange} ref={ref} {...props} />
        </label>

        {props.errormessage && (
          <div className="label absolute left-2 -bottom-8">
            <span className="label-text-alt text-error">
              {props.errormessage}
            </span>
          </div>
        )}
      </label>
    );
  }
);
InputIcon.displayName = "InputIcon";
export default InputIcon;
