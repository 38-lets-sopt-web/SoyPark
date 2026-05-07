import * as styles from "./MyCard.css";

interface MyCardProps {
  id: string;
  part: string;
}

const MyCard = ({ id, part }: MyCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>아이디</p>
        <p className={styles.content}>{id}</p>
      </div>
      <div className={styles.container}>
        <p className={styles.title}>파트</p>
        <p className={styles.content}>{part}</p>
      </div>
    </div>
  );
};

export default MyCard;
