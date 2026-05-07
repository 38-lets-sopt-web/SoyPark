export const SIGNUP_ERROR_MESSAGE = {
  id: {
    invalid: "아이디는 50자를 넘을 수 없습니다",
  },
  password: {
    invalid:
      "비밀번호는 8~64자, 공백 없이 영문/숫자/대소문자 각 1자 이상 포함해야 합니다",
  },
  passwordCheck: {
    mismatch: "비밀번호가 일치하지 않습니다.",
  },
  email: {
    invalid: "이메일 형식이 올바르지 않습니다.",
  },
  name: {
    required: "닉네임을 입력해주세요.",
    invalid: "닉네임은 1~20자, 한글/영어/숫자만 가능합니다.",
  },
  age: {
    invalid: "숫자만 입력 가능합니다.",
  },
};
