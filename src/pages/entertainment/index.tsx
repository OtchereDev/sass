import styles from "@/styles/pages/entertainment.module.scss";

import Login from "@/blocks/entertainment/Login/Login";

function index() {
  return (
    <section className={styles.main}>
      <Login />
    </section>
  );
}

export default index;
