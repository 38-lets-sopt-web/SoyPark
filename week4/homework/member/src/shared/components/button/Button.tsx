import * as styles from "./Button.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  isActive?: boolean;
}

const Button = ({
  children,
  isActive = true,
  disabled = false,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || !isActive;
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={styles.button({
        state: isDisabled ? "disabled" : "active",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
