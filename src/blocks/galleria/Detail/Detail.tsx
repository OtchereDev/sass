import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Detail.module.scss";

import { Slide } from "@/types/galleria.type";

import ViewIcon from "@/assets/galleria/shared/icon-view-image.svg";

function Detail({ slide }: { slide: Slide }) {
  const dialog = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialog.current?.showModal();
  };

  const closeDialog = () => {
    dialog.current?.close();
  };

  return (
    <section className={styles.main}>
      <div className={styles.main__image}>
        <div className={styles.main__imgbox}>
          <Image
            src={slide.images.hero.large}
            alt="image"
            width={475}
            height={560}
          />

          <div onClick={openDialog} className={styles.main__viewbox}>
            <ViewIcon />
            <p>VIEW IMAGE</p>
          </div>
        </div>

        <div className={styles.main__float}>
          <div className={styles.main__detail}>
            <h2>{slide.name}</h2>
            <h5>{slide.artist.name}</h5>
          </div>

          <Image
            width={128}
            height={128}
            src={slide.artist.image}
            alt="artist"
            className={styles.main__artist}
          />
        </div>
      </div>

      <div className={styles.main__content}>
        <h1>{slide.year}</h1>

        <p>{slide.description}</p>

        <Link target="__blank" href={slide.source}>
          GO TO SOURCE
        </Link>
      </div>

      <dialog className={styles.main__dialog} ref={dialog}>
        <div className={styles.main__dialogContent}>
          <button onClick={closeDialog}>CLOSE</button>
          <img src={slide.images.gallery} />
        </div>
      </dialog>
    </section>
  );
}

export default Detail;
