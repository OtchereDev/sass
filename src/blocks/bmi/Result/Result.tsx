import styles from "./Result.module.scss";

function Result() {
  return (
    <section className={styles.main}>
      <img src="/images/bmi/image-man-eating.webp" alt="" />
      <div className={styles.main__text}>
        <h3>What your BMI result means</h3>
        <p>
          A BMI range of 18.5 to 24.9 is considered a &apos;healthy
          weight.&apos; Maintaining a healthy weight may lower your chances of
          experiencing health issues later on, such as obesity and type 2
          diabetes. Aim for a nutritious diet with reduced fat and sugar
          content, incorporating ample fruits and vegetables. Additionally,
          strive for regular physical activity, ideally about 30 minutes daily
          for five days a week.
        </p>
      </div>
    </section>
  );
}

export default Result;
