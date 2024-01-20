import classNames from "classnames";

import pageStyle from "@/styles/pages/recipe.module.scss";
import styles from "./Ingredients.module.scss";

const ingredient = [
  "2-3 large eggs",
  "Salt, to taste",
  "Pepper, to taste",
  "1 tablespoon of butter or oil",
  "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
];

function Ingredients() {
  return (
    <section className={styles.main}>
      <h2 className={styles.main__title}>Ingredients</h2>
      <ul className={styles.main__list}>
        {ingredient.map((item) => (
          <li key={item} className={styles.main__listItem}>
            <span
              className={classNames(pageStyle.main__dot, styles.main__listDot)}
            />
            <span className={styles.main__listItemText}>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Ingredients;
