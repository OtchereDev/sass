import styles from "./Footer.module.scss";

import { Slide } from "@/types/galleria.type";

import Next from "@/assets/galleria/shared/icon-next-button.svg";
import Prev from "@/assets/galleria/shared/icon-back-button.svg";
import classNames from "classnames";
import { CSSProperties } from "react";

function Footer({
  prevDisabled,
  nextDisabled,
  slide,
  handlePrev,
  handleNext,
  slideIdx,
}: {
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  slide: Slide;
  slideIdx: number;
}) {
  return (
    <div
      style={{ "--stage": slideIdx } as CSSProperties}
      className={styles.main}
    >
      <div className={styles.main__content}>
        <h2>{slide.name}</h2>

        <p>{slide.artist.name}</p>
      </div>

      <div className={styles.main__buttons}>
        <Prev
          className={classNames({
            [styles.main__buttons_disabled]: prevDisabled,
          })}
          onClick={handlePrev}
        />
        <Next
          className={classNames({
            [styles.main__buttons_disabled]: nextDisabled,
          })}
          onClick={handleNext}
        />
      </div>
    </div>
  );
}

export default Footer;
