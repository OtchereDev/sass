import classNames from "classnames";

import styles from "./Instruction.module.scss";

const instructions = [
  {
    title: "Beat the eggs:",
    text: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan:",
    text: "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette:",
    text: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional):",
    text: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve:",
    text: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy:",
    text: "Serve hot, with additional salt and pepper if needed.",
  },
];

function Instruction() {
  return (
    <section className={styles.main}>
      <h2 className={styles.main__title}>Instructions</h2>

      <ul className={styles.main__list}>
        {instructions.map((instruction, idx) => (
          <li className={styles.main__listItem}>
            <strong className={classNames(styles.main__listNumber)}>
              {idx + 1}.
            </strong>
            <span className={styles.main__listItemText}>
              <strong>{instruction.title}</strong> {instruction.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Instruction;
