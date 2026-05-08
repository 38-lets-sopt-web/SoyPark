import MyCard from "@/pages/mypage/components/myCard/MyCard";
import type { ResponseUserInfo } from "@/pages/mypage/types/mypage";
import { getUserInfo } from "@apis/getUserInfo";
import Title from "@components/title/Title";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as styles from "./MemberDetailPage.css";

const MemberDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState<ResponseUserInfo>();

  const handleBackToList = () => {
    navigate("/mypage/search");
  };

  useEffect(() => {
    if (id) {
      getUserInfo(Number(id)).then((data) => {
        setUserInfo(data);
      });
    }
  }, [id]);

  if (!userInfo) return <p>로딩 중...</p>;

  return (
    <div className={styles.wrapper}>
      <Title title="상세 정보" />

      <div className={styles.container}>
        <button type="button" onClick={handleBackToList} className={styles.btn}>
          ← 목록으로 돌아가기
        </button>

        {userInfo?.data && (
          <MyCard
            all
            id={String(userInfo.data.loginId ?? "")}
            name={userInfo.data.name || ""}
            email={userInfo.data.email || ""}
            age={String(userInfo.data.age ?? "")}
            part={userInfo.data.part || ""}
          />
        )}
      </div>
    </div>
  );
};

export default MemberDetailPage;
