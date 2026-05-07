import MyCard from "@/pages/mypage/components/myCard/MyCard";
import * as styles from "./MyPage.css";
import Title from "@components/title/Title";
import type { ResponseUserInfo } from "@pages/mypage/types/mypage";
import { getUserInfo } from "@apis/getUserInfo";
import { LOCAL_STORAGE_KEY } from "@constants/key";
import { useState, useEffect } from "react";
import { PART_OPTIONS } from "@/pages/signup/constants/partOption";
import PartSelect from "@components/textField/PartSelect";
import TextField from "@components/textField/TextField";
import useSignupForm from "@pages/signup/hooks/useSignupForm";
import Button from "@components/button/Button";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<ResponseUserInfo>();
  const { getInputProps } = useSignupForm();

  useEffect(() => {
    const userId = Number(localStorage.getItem(LOCAL_STORAGE_KEY.userID));

    if (userId) {
      getUserInfo(userId).then((data) => {
        setUserInfo(data);
      });
    }
  }, []);

  const data = userInfo?.data;

  return (
    <div className={styles.wrapper}>
      <Title title="내 정보" />
      <MyCard id={data?.loginId || ""} part={data?.part || ""} />
      <section className={styles.editArea}>
        <TextField label="이름" {...getInputProps("name")} />
        <TextField label="이메일" {...getInputProps("email")} />
        <TextField label="나이" {...getInputProps("age")} />
        <PartSelect
          label="파트"
          options={PART_OPTIONS}
          {...getInputProps("part")}
        />
        <Button>정보 수정</Button>
      </section>
    </div>
  );
};

export default MyPage;
