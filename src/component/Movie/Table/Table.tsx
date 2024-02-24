import styles from "./Table.module.scss";

function Table({ children }: { children: React.ReactNode }) {
  return <div className={styles.main}>{children}</div>;
}

export default Table;
