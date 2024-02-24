import Image from "next/image";

import styles from "./Recommendation.module.scss";

import data from "@/assets/entertainment-web-app/data.json";

import Table from "@/component/Movie/Table/Table";
import Card from "@/component/Movie/Card/Card";

function Recommendation({
  movies,
  title,
}: {
  movies: typeof data;
  title: string;
}) {
  return (
    <section className={styles.main}>
      <h2 className={styles.main__title}>{title}</h2>

      <Table>
        {movies.map((item) => (
          <Card item={item} />
        ))}
      </Table>
    </section>
  );
}

export default Recommendation;
