import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

const variantStyles = {
  primary: "bg-gray-900 text-white hover:bg-gray-800",
  secondary: "bg-[#f0efe9] text-gray-700 hover:bg-[#e8e7e1] border border-gray-200",
};

const sizeStyles = {
  sm: "py-1.5 px-3 text-xs",
  md: "py-2.5 px-5 text-sm",
  lg: "py-3 px-7 text-base",
};

const defaultStyles =
  "cursor-pointer rounded-xl font-medium flex items-center gap-2 transition-all duration-200";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${
        props.loading ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {props.startIcon && <span>{props.startIcon}</span>}
      {props.text}
    </button>
  );
};
