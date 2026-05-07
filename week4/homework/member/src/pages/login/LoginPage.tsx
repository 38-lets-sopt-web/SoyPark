import TextField from "@components/textField/TextField";
import { useState } from "react";
import * as styles from "./Login.css";
import Button from "@components/button/Button";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleGoToSignup = () => {
    navigate("/signup");
  };

  // 버튼 비활성화 조건
  const isNextDisabled = !id || !password;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>SOPT MEMBERS</h1>
      <div className={styles.container}>
        <TextField label="아이디" type="text" value={id} onChange={setId} />
        <TextField
          label="비밀번호"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>
      <div className={styles.btnContainer}>
        <Button disabled={isNextDisabled}>로그인</Button>
        <button type="button" className={styles.btn} onClick={handleGoToSignup}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
