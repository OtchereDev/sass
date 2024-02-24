import Image from "next/image";

import styles from "./Trending.module.scss";

import data from "@/assets/entertainment-web-app/data.json";
import FavoriteIcon from "@/assets/entertainment-web-app/icon-bookmark-empty.svg";
import MovieIcon from "@/assets/entertainment-web-app/icon-category-movie.svg";
import TVIcon from "@/assets/entertainment-web-app/icon-category-tv.svg";

function Trending() {
  const movies = data.filter((item) => item.isTrending);
  return (
    <section className={styles.main}>
      <h2 className={styles.main__title}>Trending</h2>
      <div className={styles.main__slider}>
        {movies.map((item) => (
          <div className={styles.card}>
            <Image
              fill
              src={item.thumbnail.trending?.large as string}
              alt="banner"
            />
            <div className={styles.card__content}>
              <div className={styles.card__favorite}>
                <FavoriteIcon />
              </div>

              <div>
                <div className={styles.card__info}>
                  <p>{item.year}</p>
                  <div className={styles.card__dot} />
                  <div className={styles.card__category}>
                    {item.category == "Movie" ? <MovieIcon /> : <TVIcon />}
                    <p>{item.category}</p>
                  </div>
                  <div className={styles.card__dot} />
                  <p>{item.rating}</p>
                </div>
                <h1 className={styles.card__title}>{item.title}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
