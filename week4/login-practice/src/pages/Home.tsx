import { Link } from "react-router";

const Home = () => {
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
        <Link to="/member/이채영">웹팟장이채영</Link>
        <Link to="/member/양승혜">미팀장양승혜</Link>
      </div>
    </div>
  );
};

export default Home;
