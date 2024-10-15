import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/cn";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      ghost: "btn-ghost",
      link: "btn-link",
      neutral: "btn-neutral",
      grey: "btn-neutral-content",
      base100: "bg-base-100",
    },
    size: {
      default: "",
      extraSmall: "btn-xs",
      small: "btn-sm",
      large: "btn-large",
    },
    shape: {
      default: "",
      rounded: "btn-rounded",
      circle: "btn-circle",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    shape: "default",
  },
});

interface IProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label?: string;
  isOutline?: boolean;
  isWide?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, IProps>(
  (
    {
      className,
      variant,
      size,
      label,
      shape,
      isOutline = false,
      isWide = false,
      ...props
    },
    ref
  ) => {
    const contentChildren = label ?? props.children;
    return (
      <button
        className={cn(
          buttonVariants({ variant, size, shape, className }),
          isOutline && "btn-outline",
          isWide && "btn-wide"
        )}
        ref={ref}
        {...props}
      >
        {contentChildren}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
