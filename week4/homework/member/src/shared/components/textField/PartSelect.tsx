import * as styles from "./TextField.css";

interface PartSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
}

const PartSelect = ({
  label,
  options,
  value,
  onChange,
  errorMessage,
}: PartSelectProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>

      <div className={styles.inputWrapper}>
        <select
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="" disabled>
            파트 선택
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default PartSelect;
