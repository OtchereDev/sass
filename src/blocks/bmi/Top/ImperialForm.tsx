import styles from "./Top.module.scss";

function ImperialForm() {
  return (
    <div>
      <div>
        <label className={styles.main__calculatorFormLabel}>Height</label>
        <div className={styles.main__calculatorFormRow}>
          <div className={styles.main__calculatorFormInput}>
            <input type="number" />
            <p>ft</p>
          </div>

          <div className={styles.main__calculatorFormInput}>
            <input type="number" />
            <p>in</p>
          </div>
        </div>
      </div>
      <div className={styles.main__calculatorSeperator}>
        <label className={styles.main__calculatorFormLabel}>Height</label>
        <div className={styles.main__calculatorFormRow}>
          <div className={styles.main__calculatorFormInput}>
            <input type="number" />
            <p>st</p>
          </div>

          <div className={styles.main__calculatorFormInput}>
            <input type="number" />
            <p>lbs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImperialForm;
