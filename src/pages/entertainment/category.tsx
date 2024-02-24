import { useEffect, useState } from "react";
import classNames from "classnames";

import styles from "@/styles/pages/entertainment.module.scss";
import data from "@/assets/entertainment-web-app/data.json";

import NavBar from "@/component/Movie/NavBar/NavBar";
import Trending from "@/blocks/entertainment/Trending/Trending";

import Search from "@/component/Movie/Search/Search";
import Recommendation from "@/blocks/entertainment/Recommendation/Recommendation";

function movies() {
  const [search, setSearch] = useState("");
  const [filterMovies, setFilterMovies] = useState<any[]>([]);

  const onSearch = (text: string) => {
    setSearch(text);
  };

  const movies = data.filter((i) => !i.isTrending);

  useEffect(() => {
    if (search) {
      setFilterMovies(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setFilterMovies([]);
    }
  }, [search]);

  return (
    <section className={classNames(styles.main, styles.movies)}>
      <NavBar />
      <section className={styles.movies__content}>
        <Search onSearch={onSearch} />
        {search.length == 0 && <Trending />}
        <Recommendation
          title={
            search.length
              ? `Found (${filterMovies.length}) results for ‘${search}’`
              : "Recommended for you"
          }
          movies={search.length ? filterMovies : movies}
        />
      </section>
    </section>
  );
}

export default movies;
