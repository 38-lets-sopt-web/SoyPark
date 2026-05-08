import * as styles from "./MyCard.css";

interface MyCardProps {
  id: string;
  part: string;
  name?: string;
  email?: string;
  age?: string;
  all?: boolean;
}

const MyCard = ({ id, part, all = false, name, email, age }: MyCardProps) => {
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
      {!!all && (
        <>
          <div className={styles.container}>
            <p className={styles.title}>이름</p>
            <p className={styles.content}>{name}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>이메일</p>
            <p className={styles.content}>{email}</p>
          </div>
          <div className={styles.container}>
            <p className={styles.title}>나이</p>
            <p className={styles.content}>{age}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MyCard;
