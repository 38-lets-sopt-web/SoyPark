import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const buttonClassName = {
  primary: "bg-text text-text-inverse hover:bg-accent-strong",
  secondary:
    "border border-border bg-white text-text-soft hover:border-border-strong hover:text-text",
} as const;

const Button = ({
  children,
  className = "",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${buttonClassName[variant]} ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
