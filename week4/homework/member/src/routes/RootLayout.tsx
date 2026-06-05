import { Outlet, useLocation } from "react-router-dom";
import * as styles from "./RootLayout.css";
import Header from "@components/header/Header";

const RootLayout = () => {
  const location = useLocation();
  const showHeader = location.pathname.startsWith("/mypage");

  return (
    <div className={styles.wrapper}>
      {showHeader && <Header />}
      <main className={styles.container}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
