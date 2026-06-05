// field 검증 관련 상수
export const VALIDATION_RULES = {
  ID_MAX_LENGTH: 50,
  PASSWORD_REGEX:
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,64}$/,
  PASSWORD_NO_SPACE: /^\S*$/,
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  AGE_REGEX: /^[0-9]*$/,
};
