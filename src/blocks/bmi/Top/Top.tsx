import Image from "next/image";
import Logo from "@/assets/bmi-calculator/assets/images/logo.svg";

import styles from "./Top.module.scss";
import classNames from "classnames";
import MetricForm from "./MetricForm";
import ImperialForm from "./ImperialForm";

function Top() {
  return (
    <section className={styles.main}>
      <div className={styles.main__bg}></div>
      <section className={styles.main__content}>
        <Image className={styles.main__logo} src={Logo} alt="logo" />

        <div className={styles.main__flex}>
          <div className={styles.main__flexTextSection}>
            <h1>
              Body Mass <br />
              Index Calculator
            </h1>
            <p>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>

          <div className={styles.main__calculator}>
            <h4 className={styles.main__calculatorTitle}>
              Enter your details below
            </h4>
            <div className={styles.main__calculatorOptions}>
              <div className={styles.main__calculatorRadioItem}>
                <div
                  className={classNames(
                    styles.main__calculatorRadio,
                    styles.main__calculatorRadio_selected
                  )}
                ></div>
                <p>Metric</p>
              </div>
              <div className={styles.main__calculatorRadioItem}>
                <div className={classNames(styles.main__calculatorRadio)}></div>
                <p>Imperial</p>
              </div>
            </div>

            <div className={styles.main__calculatorForm}>
              {/* <MetricForm /> */}
              <ImperialForm />
            </div>

            <div className={styles.main__calculatorResult}>
              {/* <>
                <div className={styles.main__calculatorResultScore}>
                  <h5>Your BMI is...</h5>
                  <h3>23.4</h3>
                </div>

                <div className={styles.main__calculatorResultDescription}>
                  <p>
                    Your BMI suggests you’re a healthy weight. Your ideal weight
                    is between <strong>63.3kgs - 85.2kgs</strong>.
                  </p>
                </div>
              </> */}

              <div className={styles.main__calculatorResultWelcome}>
                <h4>Welcome!</h4>
                <p>
                  Enter your height and weight and you’ll see your BMI result
                  here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Top;
