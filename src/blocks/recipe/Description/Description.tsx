import classNames from "classnames";

import styles from "./Description.module.scss";
import pageStyle from "@/styles/pages/recipe.module.scss";

function Description() {
  return (
    <section className={styles.main}>
      <h1 className={styles.main__title}>Simple Omelette Recipe</h1>
      <p className={styles.main__description}>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>

      <div className={styles.main__preparation}>
        <h3 className={styles.main__preparationTitle}>Preparation time</h3>
        <ul className={styles.main__preparationList}>
          <li className={styles.main__preparationListItem}>
            <span
              className={classNames(
                pageStyle.main__dot,
                styles.main__preparationDot
              )}
            />
            <span className={styles.main__preparationListItemText}>
              <strong>Total:</strong> Approximately 10 minutes
            </span>
          </li>
          <li className={styles.main__preparationListItem}>
            <span
              className={classNames(
                pageStyle.main__dot,
                styles.main__preparationDot
              )}
            />
            <span className={styles.main__preparationListItemText}>
              <strong>Preparation:</strong> 5 minutes
            </span>
          </li>
          <li className={styles.main__preparationListItem}>
            <span
              className={classNames(
                pageStyle.main__dot,
                styles.main__preparationDot
              )}
            />
            <span className={styles.main__preparationListItemText}>
              <strong>Cooking:</strong> 5 minutes
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Description;
