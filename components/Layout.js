import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.components}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
