import * as styles from "./UserCard.css";

interface UserCardProps {
  name: string;
  part: string;
}

const UserCard = ({ name, part }: UserCardProps) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.content["default"]}>{name}</p>
      <p className={styles.content["box"]}>{part}</p>
    </div>
  );
};

export default UserCard;
