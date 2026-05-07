import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";

const nickname = "웨비들아따랑해";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = (select: string) => {
    if (select === "me") {
      navigate("/mypage/info");
    } else if (select === "search") {
      navigate("/mypage/search");
    }
  };

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.LeftText}>
        <h1 className={styles.headerText}>SOPT MEMBERS</h1>
        <p className={styles.pText}>안녕하세요 {nickname}님</p>
      </div>

      <div className={styles.RightText}>
        <button className={styles.btnText} onClick={() => handleNavigate("me")}>
          내 정보
        </button>
        <button
          className={styles.btnText}
          onClick={() => handleNavigate("search")}
        >
          회원 조회
        </button>
        <button className={styles.btnText}>로그아웃</button>
        {/* <h1 className={styles.HeaderText}>닉네임</h1> */}
      </div>
    </header>
  );
};

export default Header;
