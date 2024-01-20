import classNames from "classnames";

import styles from "./Nutrition.module.scss";

const nutritents = [
  {
    name: "Calories",
    value: "277kcal",
  },
  {
    name: "Carbs",
    value: "0g",
  },
  {
    name: "Protein",
    value: "20g",
  },
  {
    name: "Fat",
    value: "22g",
  },
];

function Nutrition() {
  return (
    <section className={styles.main}>
      <h2 className={styles.main__title}>Nutrition</h2>
      <p className={styles.main__description}>
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>

      <table className={styles.main__table}>
        <tbody className={styles.main__tableBody}>
          {nutritents.map((nutri, idx) => (
            <tr
              key={nutri.name}
              className={classNames(styles.main__tableRow, {
                [styles.main__tableRow_noBorder]: idx == nutritents.length - 1,
              })}
            >
              <td
                className={classNames(
                  styles.main__tableData,
                  styles.main__tableDataFirst
                )}
              >
                {nutri.name}
              </td>
              <td
                className={classNames(
                  styles.main__tableData,
                  styles.main__tableDataSecond
                )}
              >
                {nutri.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Nutrition;
