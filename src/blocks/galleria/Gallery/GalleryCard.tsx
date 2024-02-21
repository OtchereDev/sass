import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import gsap, { Power2 } from "gsap";
import classNames from "classnames";

import styles from "./Gallery.module.scss";

import { Slide } from "@/types/galleria.type";

interface GalleryCard {
  gallery: Slide;
  idx: number;
}

function GalleryCard({ gallery, idx }: GalleryCard) {
  const router = useRouter();
  const img = useRef(null);

  useEffect(() => {
    const GSAP = require("gsap/CSSRulePlugin");
    const { CSSRulePlugin } = GSAP;
    gsap.registerPlugin(CSSRulePlugin);
    const imgReveal = CSSRulePlugin.getRule(
      `.${styles.main__imgcontainer}:after`
    );
    const tl = gsap.timeline({});

    tl.to(imgReveal, {
      width: "0%",
      ease: Power2.easeInOut,
      stagger: 1,
      duration: 2,
    });
    tl.fromTo(
      img.current,
      {
        scale: 1.6,
        ease: Power2.easeInOut,
      },
      {
        delay: -1,
        duration: 1.4,
        scale: 1,
        ease: Power2.easeInOut,
      }
    );
  }, []);

  return (
    <div
      className={classNames(styles.main__imgcontainer, idx.toString())}
      onClick={() => router.push(`/galleria/slideshow?index=${idx}`)}
    >
      <Image
        ref={img}
        layout="fill"
        src={gallery.images.gallery}
        alt={gallery.name}
      />
      <section className={styles.main__overlay} />
      <h1>{gallery.name}</h1>
      <h4>{gallery.artist.name}</h4>
    </div>
  );
}

export default GalleryCard;
