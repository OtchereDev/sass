import { useState } from "react";

import styles from "@/styles/pages/galleria.module.scss";

import data from "@/blocks/galleria/data.json";

import NavBar from "@/blocks/galleria/NavBar/NavBar";
import Detail from "@/blocks/galleria/Detail/Detail";
import Footer from "@/blocks/galleria/Footer/Footer";
import { useRouter } from "next/router";

function Slideshow() {
  const router = useRouter();

  const { index } = router.query;
  const [currentSlide, setCurrentSlide] = useState(
    !isNaN(parseInt((index as string) ?? "")) ? parseInt(index as string) : 0
  );

  const handleNext = () => {
    setCurrentSlide((cs) => cs + 1);
  };

  const handlePrev = () => {
    setCurrentSlide((cs) => cs - 1);
  };

  return (
    <section className={styles.main}>
      <section className={styles.container}>
        <NavBar start={false} />
        <Detail slide={data[currentSlide]} />
        <Footer
          slide={data[currentSlide]}
          prevDisabled={currentSlide == 0}
          nextDisabled={currentSlide == data.length - 1}
          handleNext={handleNext}
          handlePrev={handlePrev}
          slideIdx={currentSlide}
        />
      </section>
    </section>
  );
}

export default Slideshow;
