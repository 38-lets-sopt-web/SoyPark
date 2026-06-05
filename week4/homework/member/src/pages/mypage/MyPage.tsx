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
import { patchUserInfo } from "@/pages/mypage/apis/mypage";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState<ResponseUserInfo>();
  const { values, setValues, getInputProps, errors } = useSignupForm(3);
  const data = userInfo?.data;

  // 정보 채워두기 (이름, 이메일, 나이)
  useEffect(() => {
    if (data) {
      setValues((prev: InitialFormData) => ({
        ...prev,
        name: data.name || "",
        email: data.email || "",
        age: String(data.age || ""),
        part: data.part || "",
      }));
    }
  }, [data, setValues]);

  const userId = Number(localStorage.getItem(LOCAL_STORAGE_KEY.userID));

  useEffect(() => {
    if (userId) {
      getUserInfo(userId).then((data) => {
        setUserInfo(data);
      });
    }
  }, [userId]);

  const handleEdit = async () => {
    try {
      const requestBody = {
        name: values.name,
        email: values.email,
        age: Number(values.age),
      };

      const response = await patchUserInfo(userId, requestBody);

      if (response.success) {
        alert("정보 수정 성공");
        // window.location.reload();
      } else {
        alert("정보 수정 실패");
      }
    } catch (err) {
      console.error("정보 수정 에러", err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Title title="내 정보" />
      <div className={styles.cardContainer}>
        <MyCard id={data?.loginId || ""} part={data?.part || ""} />
      </div>

      <section className={styles.editArea}>
        <TextField label="이름" {...getInputProps("name")} />
        <TextField
          label="이메일"
          {...getInputProps("email")}
          errorMessage={errors.email}
        />
        <TextField label="나이" {...getInputProps("age")} />
        <Button onClick={handleEdit}>정보 수정</Button>
      </section>
    </div>
  );
};

export default MyPage;
