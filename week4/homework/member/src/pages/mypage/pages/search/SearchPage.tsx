import Title from "@components/title/Title";
import * as styles from "./SearchPage.css";
import TextField from "@components/textField/TextField";
import Button from "@components/button/Button";

import type { ResponseUserInfo } from "@pages/mypage/types/mypage";
import { useState } from "react";

import MyCard from "@/pages/mypage/components/myCard/MyCard";
import { getUserInfo } from "@apis/getUserInfo";
import MemberList from "@/pages/mypage/pages/search/components/MemberList";

const SearchPage = () => {
  const [searchId, setSearchId] = useState("");
  const [userInfo, setUserInfo] = useState<ResponseUserInfo | null>(null);

  const handleSearch = async () => {
    if (!searchId) {
      alert("ID를 입력해주세요.");
      return;
    }

    try {
      const data = await getUserInfo(Number(searchId));
      setUserInfo(data);
    } catch (err) {
      console.error("검색 실패", err);
      setUserInfo(null);
      alert("존재하지 않는 회원입니다.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <Title title="회원 조회" />
      <section className={styles.searchSection}>
        <TextField
          label="회원ID"
          type="number"
          value={searchId}
          onChange={setSearchId}
          placeholder="ID를 입력하세요."
        />
        <Button onClick={handleSearch} disabled={!searchId}>
          검색
        </Button>
        <div className={styles.result}>
          <p className={styles.headingText}>검색 결과</p>
          <div className={styles.resultContent}>
            {userInfo?.data ? (
              <MyCard
                all
                id={String(userInfo.data.id ?? "")}
                name={userInfo.data.name || ""}
                email={userInfo.data.email || ""}
                age={String(userInfo.data.age ?? "")}
                part={userInfo.data.part || ""}
              />
            ) : (
              <p>회원을 검색해보세요.</p>
            )}
          </div>
        </div>
      </section>
      <MemberList />
    </div>
  );
};

export default SearchPage;
