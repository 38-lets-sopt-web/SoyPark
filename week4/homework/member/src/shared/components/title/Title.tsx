import * as styles from "./Title.css";

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <h1 className={styles.header}>{title}</h1>;
};

export default Title;
