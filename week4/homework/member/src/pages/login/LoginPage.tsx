import TextField from "@components/textField/TextField";
import { useState } from "react";
import * as styles from "./LoginPage.css";
import Button from "@components/button/Button";
import { useNavigate } from "react-router-dom";
import { postLogin } from "@/pages/login/apis/login";
import Title from "@components/title/Title";
import { LOCAL_STORAGE_KEY } from "@constants/key";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  const handleLogin = async () => {
    const requestBody = {
      loginId: id,
      password: password,
    };

    try {
      const response = await postLogin(requestBody);

      if (response.success && response.data) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY.userID,
          String(response.data.userId),
        );
        alert("로그인 성공!");
        navigate("/mypage");
      } else {
        alert(response.message || "로그인 실패");
      }
    } catch (error) {
      console.error("실제 발생한 에러:", error);
      alert("로그인 실패/내부에러");
    }
  };

  // 버튼 비활성화 조건
  const isNextDisabled = !id || !password;

  return (
    <div className={styles.wrapper}>
      <Title title="SOPT MEMBERS" />
      <div className={styles.container}>
        <TextField
          label="아이디"
          type="text"
          value={id}
          placeholder="아이디를 입력해 주세요"
          onChange={setId}
        />
        <TextField
          label="비밀번호"
          type="password"
          value={password}
          placeholder="비밀번호를 입력해 주세요"
          onChange={setPassword}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button disabled={isNextDisabled} onClick={handleLogin}>
          로그인
        </Button>
        <button type="button" className={styles.btn} onClick={handleGoToSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
