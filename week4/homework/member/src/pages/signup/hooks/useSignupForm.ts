import {
  validateAge,
  validateEmail,
  validateId,
  validatePassword,
  validatePasswordConfirm,
} from "../utils/validate";
import { useMemo, useState } from "react";

export interface InitialFormData {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

const initialValues: InitialFormData = {
  id: "",
  password: "",
  passwordConfirm: "",
  name: "",
  email: "",
  age: "",
  part: "",
};

const useSignupForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<InitialFormData>(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // 현재 스템의 에러 메시지
  const errors = useMemo(() => {
    const currentErrors: Record<string, string> = {};

    if (step === 1) {
      const error = validateId(values.id);
      if (error) currentErrors.id = error;
    }

    if (step === 2) {
      const passwordError = validatePassword(values.password);
      const confirmError = validatePasswordConfirm(
        values.password,
        values.passwordConfirm,
      );
      if (passwordError) currentErrors.password = passwordError;
      if (confirmError) currentErrors.passwordConfirm = confirmError;
    }

    if (step === 3) {
      const emailError = validateEmail(values.email);
      const ageError = validateAge(values.age);

      if (!values.name) currentErrors.name = "이름을 입력해주세요.";
      if (emailError) currentErrors.email = emailError;
      if (ageError) currentErrors.age = ageError;
      if (!values.part) currentErrors.part = "파트를 선택해주세요.";
    }

    return currentErrors;
  }, [values, step]);

  // 다 입려되었는지
  const isStepFilled = useMemo(() => {
    if (step === 1) return !!values.id;
    if (step === 2) return !!values.password && !!values.passwordConfirm;
    if (step === 3)
      return !!values.name && !!values.email && !!values.age && !!values.part;
    return false;
  }, [values, step]);

  const isNextDisabled = Object.keys(errors).length > 0 || !isStepFilled;

  const nextStep = () => {
    if (!isNextDisabled) setStep((prev) => prev + 1);
  };

  // 입력
  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // 포커스 아웃 되었을 때 에러 메시지 띄우기
  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const getInputProps = (name: keyof typeof values) => ({
    value: values[name],
    onChange: (val: string) => handleChange(name, val),
    onBlur: () => handleBlur(name),
    errorMessage: touched[name] ? errors[name] : "",
  });

  return {
    step,
    nextStep,
    isNextDisabled,
    getInputProps,
    values,
    setValues,
  };
};

export default useSignupForm;
