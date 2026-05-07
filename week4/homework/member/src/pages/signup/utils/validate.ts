// 회원가입 필드 유효성 검사 로직
import { SIGNUP_ERROR_MESSAGE } from "../constants/errorMessages";
import { VALIDATION_RULES } from "../constants/validation";

// 아이디
export const validateId = (id: string) => {
  if (!id) return;
  if (id.length > VALIDATION_RULES.ID_MAX_LENGTH) {
    return SIGNUP_ERROR_MESSAGE.id.invalid;
  }
  return "";
};

// 비밀번호
export const validatePassword = (password: string) => {
  if (!password) return;
  if (!VALIDATION_RULES.PASSWORD_NO_SPACE.test(password)) {
    return SIGNUP_ERROR_MESSAGE.password.invalid;
  }
  if (!VALIDATION_RULES.PASSWORD_REGEX.test(password)) {
    return SIGNUP_ERROR_MESSAGE.password.invalid;
  }
  return "";
};

// 비밀번호 일치
export const validatePasswordConfirm = (password: string, confirm: string) => {
  if (!confirm) return;
  if (password !== confirm) return SIGNUP_ERROR_MESSAGE.passwordCheck.mismatch;
  return "";
};

// 이메일 형식
export const validateEmail = (email: string) => {
  if (!email) return;
  if (!VALIDATION_RULES.EMAIL_REGEX.test(email)) {
    return SIGNUP_ERROR_MESSAGE.email.invalid;
  }
  return "";
};

// 나이
export const validateAge = (age: string) => {
  if (!age) return;
  if (!VALIDATION_RULES.AGE_REGEX.test(age)) {
    return SIGNUP_ERROR_MESSAGE.age.invalid;
  }
  return "";
};
