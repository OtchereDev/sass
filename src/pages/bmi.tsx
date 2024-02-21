import styles from "@/styles/pages/bmi.module.scss";

import Top from "@/blocks/bmi/Top/Top";
import Result from "@/blocks/bmi/Result/Result";
import Benefits from "@/blocks/bmi/Benefits/Benefits";

function Index() {
  return (
    <section className={styles.main}>
      <Top />
      <Result />
      <Benefits />
    </section>
  );
}

export default Index;
