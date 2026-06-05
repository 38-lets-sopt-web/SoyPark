import * as styles from "./UserCard.css";

interface UserCardProps {
  name: string;
  part: string;
  onClick: () => void;
}

const UserCard = ({ name, part, onClick }: UserCardProps) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <p className={styles.content["default"]}>{name}</p>
      <p className={styles.content["box"]}>{part}</p>
    </div>
  );
};

export default UserCard;
