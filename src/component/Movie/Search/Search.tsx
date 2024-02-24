import { useState } from "react";

import styles from "./Search.module.scss";

import SearchIcon from "@/assets/entertainment-web-app/icon-search.svg";

function Search({ onSearch }: { onSearch?: (text: string) => void }) {
  const [search, setSearch] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch && onSearch(search);
      }}
      className={styles.main}
    >
      <SearchIcon />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for movie or TV series"
        className=""
      />
    </form>
  );
}

export default Search;
