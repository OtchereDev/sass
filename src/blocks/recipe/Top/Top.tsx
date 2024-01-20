import styles from "./Top.module.scss";

function Top() {
  return (
    <img
      className={styles.main}
      src="/images/recipe/image-omelette.jpeg"
      alt="image-omelette"
    />
  );
}

export default Top;
