import { LOCAL_STORAGE_KEY } from "@constants/key";
import * as styles from "./Header.css";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "@apis/getUserInfo";
import { useEffect, useState } from "react";
import type { ResponseUserInfo } from "@/pages/mypage/types/mypage";

const Header = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<ResponseUserInfo>();

  const handleNavigate = (select: string) => {
    if (select === "me") {
      navigate("/mypage");
    } else if (select === "search") {
      navigate("/mypage/search");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY.userID);
    alert("로그아웃 완료");
    navigate("/");
  };

  useEffect(() => {
    const userId = Number(localStorage.getItem(LOCAL_STORAGE_KEY.userID));

    if (userId) {
      getUserInfo(userId).then((data) => {
        setUserInfo(data);
      });
    }
  }, []);

  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.LeftText}>
        <h1 className={styles.headerText}>SOPT MEMBERS</h1>
        <p className={styles.pText}>안녕하세요 {userInfo?.data.name}님</p>
      </div>

      <div className={styles.RightText}>
        <button className={styles.btnText} onClick={() => handleNavigate("me")}>
          내 정보
        </button>
        <button
          type="button"
          className={styles.btnText}
          onClick={() => handleNavigate("search")}
        >
          회원 조회
        </button>
        <button type="button" className={styles.btnText} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
