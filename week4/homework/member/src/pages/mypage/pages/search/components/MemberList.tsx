import { useEffect, useState } from "react";
import * as styles from "./MemberList.css";
import UserCard from "@/pages/mypage/pages/search/components/UserCards";
import { getUsers } from "@/pages/mypage/apis/mypage";
import type { Users } from "@/pages/mypage/types/mypage";
import { useNavigate } from "react-router-dom";

const MemberList = () => {
  const [memberList, setMemberList] = useState<Users[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getUsers();

        if (response.success) {
          setMemberList(response.data.users);
        }
      } catch (error) {
        console.error("멤버 목록 불러오기 실패:", error);
      }
    };

    fetchMembers();
  }, []);

  const handleGotoDetail = (id: number) => {
    navigate(`/mypage/search/${id}`);
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>전체 멤버 리스트</h1>
      <div className={styles.cardContainer}>
        {memberList.length > 0 ? (
          memberList.map((data) => (
            <UserCard
              key={data.id}
              name={data.name}
              part={data.part}
              onClick={() => handleGotoDetail(data.id)}
            />
          ))
        ) : (
          <p>멤버가 없습니다.</p>
        )}
      </div>
    </section>
  );
};

export default MemberList;
