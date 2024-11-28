import { cn } from "~/lib/cn";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

// Define selectVariants with CVA to handle variant and shape
const selectVariants = cva("select w-full focus:outline-none focus:ring-0", {
  variants: {
    variant: {
      default: "bg-base-300/40",
      ghost: "",
      error: "bg-error/10 border-error focus:border-error",
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
  options: { label: string; value: string; isDisabled?: boolean }[];
  placeholder: string;
  errormessage?: string;
}

const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  ({ className, variant, shape, label, onChange, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full relative">
        {label && (
          <label className="text-[.5rem] text-primary-content/50 absolute left-4 top-1">
            {label}
          </label>
        )}
        {!label && props.placeholder && (
          <label className="text-sm absolute top-3.5 left-[1.1rem] text-gray-400">
            {props.placeholder}
          </label>
        )}
        <select
          onChange={onChange}
          className={cn(selectVariants({ variant, shape, className }))}
          ref={ref}
          {...props}
        >
          {props.options.map((data) => {
            return (
              <option
                key={data.value}
                value={data.value}
                disabled={data.isDisabled}
              >
                {data.label}
              </option>
            );
          })}
        </select>
        {props.errormessage && (
          <span className="absolute -bottom-5 left-2 text-xs text-error">
            {props.errormessage}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
