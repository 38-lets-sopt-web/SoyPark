import { useState, type ChangeEvent, type ComponentProps } from "react";
import * as styles from "./TextField.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

interface TextFieldProps extends Omit<
  ComponentProps<"input">,
  "value" | "onChange"
> {
  label: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const TextField = ({
  label,
  value,
  onChange,
  errorMessage,
  id,
  type,
  ...props
}: TextFieldProps) => {
  const inputId = id ?? label;
  const hasError = Boolean(errorMessage);

  // 비밀번호 보이기
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const isPasswordType = type === "password";
  const currentType = isPasswordType && showPassword ? "text" : type;

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={inputId}>
        {label}
      </label>

      <div className={styles.inputWrapper} data-error={hasError}>
        <input
          id={inputId}
          className={styles.input}
          type={currentType}
          value={value}
          onChange={handleChange}
          aria-invalid={hasError}
          {...props}
        />

        {isPasswordType && (
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default TextField;
