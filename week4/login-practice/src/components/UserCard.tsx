interface UserInfo {
  id: number;
  name: string;
  part: string;
}

interface UserCardProps {
  user: UserInfo;
}

const UserCard = ({ user }: UserCardProps) => {
  const { id, name, part } = user;
  return (
    <div
      style={{
        display: "block",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        textDecoration: "none",
        color: "#333",
        width: "150px",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem 0" }}>{name}</h3>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{part}</p>
    </div>
  );
};

export default UserCard;
