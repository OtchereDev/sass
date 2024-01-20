import styles from "@/styles/pages/recipe.module.scss";

import Top from "@/blocks/recipe/Top/Top";
import Description from "@/blocks/recipe/Description/Description";
import Ingredients from "@/blocks/recipe/Ingredients/Ingredients";
import Divider from "@/blocks/recipe/Divider/Divider";
import Instruction from "@/blocks/recipe/Instruction/Instruction";
import Nutrition from "@/blocks/recipe/Nutrition/Nutrition";

function recipe() {
  return (
    <section className={styles.main}>
      <section className={styles.main__body}>
        <Top />
        <section className={styles.main__bodyContent}>
          <Description />
          <Ingredients />
          <Divider />
          <Instruction />
          <Divider />
          <Nutrition />
        </section>
      </section>
    </section>
  );
}

export default recipe;
