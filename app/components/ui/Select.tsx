import { cn } from "../../../lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

// Define selectVariants with CVA to handle variant and shape
const selectVariants = cva("select w-full", {
  variants: {
    variant: {
      default: "bg-base-300/40",
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

// Define the props interface for Select component
interface ISelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectVariants> {
  label?: string;
  options: { label: string; value: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ className, variant, shape, label, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label className="text-xs">{label}</label>}
        <select
          onChange={onChange}
          className={cn(selectVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        >
          {props.options.map((data) => {
            return (
              <option key={data.value} value={data.value}>
                {data.label}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
