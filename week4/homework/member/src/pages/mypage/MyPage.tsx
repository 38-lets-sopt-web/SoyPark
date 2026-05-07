import MyCard from "@/pages/mypage/components/myCard/MyCard";
import * as styles from "./MyPage.css";
import Title from "@components/title/Title";
import type { ResponseUserInfo } from "@pages/mypage/types/mypage";
import { getUserInfo } from "@apis/getUserInfo";
import { LOCAL_STORAGE_KEY } from "@constants/key";
import { useState, useEffect } from "react";
import TextField from "@components/textField/TextField";
import useSignupForm, {
  type InitialFormData,
} from "@pages/signup/hooks/useSignupForm";
import Button from "@components/button/Button";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<ResponseUserInfo>();
  const { setValues, getInputProps } = useSignupForm();
  const data = userInfo?.data;

  // 정보 채워두기 (이름, 이메일, 나이)
  useEffect(() => {
    if (data) {
      setValues((prev: InitialFormData) => ({
        ...prev,
        name: data.name || "",
        email: data.email || "",
        age: String(data.age || ""),
      }));
    }
  }, [data, setValues]);

  useEffect(() => {
    const userId = Number(localStorage.getItem(LOCAL_STORAGE_KEY.userID));

    if (userId) {
      getUserInfo(userId).then((data) => {
        setUserInfo(data);
      });
    }
  }, []);

  const handleEdit = async () => {};

  return (
    <div className={styles.wrapper}>
      <Title title="내 정보" />
      <MyCard id={data?.loginId || ""} part={data?.part || ""} />
      <section className={styles.editArea}>
        <TextField label="이름" {...getInputProps("name")} />
        <TextField label="이메일" {...getInputProps("email")} />
        <TextField label="나이" {...getInputProps("age")} />
        <Button onClick={handleEdit}>정보 수정</Button>
      </section>
    </div>
  );
};

export default MyPage;
