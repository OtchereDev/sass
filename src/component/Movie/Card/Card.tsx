import React from "react";

import Image from "next/image";

import styles from "./Card.module.scss";

import data from "@/assets/entertainment-web-app/data.json";

import FavoriteIcon from "@/assets/entertainment-web-app/icon-bookmark-empty.svg";
import MovieIcon from "@/assets/entertainment-web-app/icon-category-movie.svg";
import FavoriteFilledIcon from "@/assets/entertainment-web-app/icon-bookmark-full.svg";
import TVIcon from "@/assets/entertainment-web-app/icon-category-tv.svg";

function Card({ item }: { item: (typeof data)[0] }) {
  return (
    <div className={styles.main}>
      <div className={styles.main__img}>
        <Image fill src={item.thumbnail.regular.large} alt="poster" />
        <div className={styles.main__favorite}>
          {item.isBookmarked ? <FavoriteFilledIcon /> : <FavoriteIcon />}
        </div>
      </div>
      <div className={styles.main__content}>
        <div className={styles.main__info}>
          <p>{item.year}</p>
          <div className={styles.main__dot} />
          <div className={styles.main__category}>
            {item.category == "Movie" ? <MovieIcon /> : <TVIcon />}
            <p>{item.category}</p>
          </div>
          <div className={styles.main__dot} />
          <p>{item.rating}</p>
        </div>
        <h1 className={styles.main__title}>{item.title}</h1>
      </div>
    </div>
  );
}

export default Card;
