import styles from "./Benefits.module.scss";

import EatIcon from "@/assets/bmi-calculator/assets/images/icon-eating.svg";
import SleepIcon from "@/assets/bmi-calculator/assets/images/icon-sleep.svg";
import ExerciseIcon from "@/assets/bmi-calculator/assets/images/icon-exercise.svg";
import Image from "next/image";

const benefits = [
  {
    icon: EatIcon,
    title: "Healthy eating",
    text: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
  },
  {
    icon: ExerciseIcon,
    title: "Regular exercise",
    text: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
  },
  {
    icon: SleepIcon,
    title: "Adequate sleep",
    text: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
  },
];

function Benefits() {
  return (
    <section className={styles.main}>
      {benefits.map((benefit) => (
        <div key={benefit.title} className={styles.main__card}>
          <Image src={benefit.icon} alt="" />

          <div>
            <h4>{benefit.title}</h4>

            <p>{benefit.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Benefits;
