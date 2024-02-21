import classNames from "classnames";

import styles from "./Top.module.scss";

function MetricForm() {
  return (
    <div
      className={classNames(
        styles.main__calculatorFormRow,
        styles.main__calculatorFormRowMetric
      )}
    >
      <div className={styles.main__calculatorFormRowSection}>
        <label className={styles.main__calculatorFormLabel}>Height</label>
        <div className={styles.main__calculatorFormInput}>
          <input type="number" />
          <p>cm</p>
        </div>
      </div>
      <div className={styles.main__calculatorFormRowSection}>
        <label className={styles.main__calculatorFormLabel}>Weight</label>
        <div className={styles.main__calculatorFormInput}>
          <input type="number" />
          <p>kg</p>
        </div>
      </div>
    </div>
  );
}

export default MetricForm;
