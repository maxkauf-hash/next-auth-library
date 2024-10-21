import React from "react";
import clsx from "clsx";

export interface ButtonProps {
  type: "button" | "submit";
  label: string;
  disabled?: boolean;
  variant: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  type,
  label,
  disabled,
  variant,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "p-2 rounded-md max-w-fit max-h-fit",
        variant === "primary" && "bg-blue-500 text-white",
        variant === "secondary" && "bg-gray-500 text-white"
      )}
      disabled={disabled}
    >
      {label} - {variant}
    </button>
  );
};

export default Button;
