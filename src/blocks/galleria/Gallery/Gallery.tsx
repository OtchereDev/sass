import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./Gallery.module.scss";

import data from "../data.json";
import { useEffect, useRef } from "react";
import gsap, { TimelineLite, Power2 } from "gsap";
import GalleryCard from "./GalleryCard";

function Gallery() {
  const container = useRef(null);

  useEffect(() => {
    gsap.to(container.current, { css: { visibility: "visible" }, duration: 0 });
  }, []);

  return (
    <section ref={container} className={styles.main}>
      {data.map((data, idx) => (
        <GalleryCard key={idx} gallery={data} idx={idx} />
      ))}
    </section>
  );
}

export default Gallery;
