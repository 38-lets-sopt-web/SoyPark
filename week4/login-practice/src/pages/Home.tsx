import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { Link } from "react-router";
interface UserInfo {
  id: number;
  name: string;
  part: string;
}

const Home = () => {
  const [userList, setUserList] = useState<UserInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setUserList(res.data.data.users);
      } catch (error) {
        console.error("유저 리스트를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>홈</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {userList.map((user) => (
            <Link
              key={user.id}
              to={`/member/${user.id}`}
              style={{ textDecoration: "none", color: "wite" }}
            >
              <UserCard key={user.id} user={user} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
