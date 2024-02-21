import styles from "@/styles/pages/galleria.module.scss";

import Gallery from "@/blocks/galleria/Gallery/Gallery";
import NavBar from "@/blocks/galleria/NavBar/NavBar";

function index() {
  return (
    <section className={styles.main}>
      <section className={styles.container}>
        <NavBar start />
        <Gallery />
      </section>
    </section>
  );
}

export default index;
