import { useNavigate } from "react-router-dom";
import TextField from "@components/textField/TextField";
import Button from "@components/button/Button";
import PartSelect from "@components/textField/PartSelect";
import useSignupForm from "./hooks/useSignupForm";
import { PART_OPTIONS } from "./constants/partOption";
import * as styles from "./SignupPage.css";
import { postSignup } from "@/pages/signup/apis/signup";
import { LOCAL_STORAGE_KEY } from "@/shared/constants/key";
import Title from "@components/title/Title";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/");
  };

  const { values, step, nextStep, isNextDisabled, getInputProps } =
    useSignupForm();

  const handleSignup = async () => {
    const requestBody = {
      loginId: values.id,
      password: values.password,
      name: values.name,
      email: values.email,
      age: Number(values.age),
      part: values.part,
    };

    try {
      const response = await postSignup(requestBody);

      const userId = response.data.userId;
      localStorage.setItem(LOCAL_STORAGE_KEY.userID, String(userId));

      alert(`${values.name}님, 회원가입을 축하합니다!`);
      handleGoToLogin();
    } catch {
      alert("회원가입 실패");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Title title="회원가입" />
      <div className={styles.container}>
        {step === 1 && (
          <TextField
            label="아이디"
            placeholder="아이디를 입력해 주세요"
            {...getInputProps("id")}
          />
        )}

        {step === 2 && (
          <>
            <TextField
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              {...getInputProps("password")}
            />
            <TextField
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요"
              {...getInputProps("passwordConfirm")}
            />
          </>
        )}

        {step === 3 && (
          <>
            <TextField
              label="이름"
              placeholder="이름을 입력해 주세요"
              {...getInputProps("name")}
            />
            <TextField
              label="이메일"
              placeholder="이메일을 입력해 주세요"
              {...getInputProps("email")}
            />
            <TextField
              label="나이"
              placeholder="나이를 입력해 주세요"
              {...getInputProps("age")}
            />
            <PartSelect
              label="파트"
              options={PART_OPTIONS}
              {...getInputProps("part")}
            />
          </>
        )}
      </div>
      <div className={styles.btnContainer}>
        <Button
          disabled={isNextDisabled}
          onClick={() => {
            if (step === 3) {
              handleSignup();
            } else {
              nextStep();
            }
          }}
        >
          {step === 3 ? "회원가입" : "다음 단계"}
        </Button>
        <button type="button" className={styles.btn} onClick={handleGoToLogin}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
