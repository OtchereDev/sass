import classNames from "classnames";

import styles from "@/styles/pages/entertainment.module.scss";
import data from "@/assets/entertainment-web-app/data.json";

import NavBar from "@/component/Movie/NavBar/NavBar";

import Search from "@/component/Movie/Search/Search";
import Recommendation from "@/blocks/entertainment/Recommendation/Recommendation";

function TV() {
  return (
    <section className={classNames(styles.main, styles.movies)}>
      <NavBar />
      <section className={styles.movies__content}>
        <Search />
        <Recommendation
          title="TV Series"
          movies={data.filter((i) => i.category !== "Movie")}
        />
      </section>
    </section>
  );
}

export default TV;
