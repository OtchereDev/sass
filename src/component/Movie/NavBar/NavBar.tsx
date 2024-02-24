import classNames from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import styles from "./NavBar.module.scss";

import Logo from "@/assets/entertainment-web-app/logo.svg";
import Bookmark from "@/assets/entertainment-web-app/icon-nav-bookmark.svg";
import TV from "@/assets/entertainment-web-app/icon-nav-tv-series.svg";
import Clip from "@/assets/entertainment-web-app/icon-nav-movies.svg";
import Category from "@/assets/entertainment-web-app/icon-nav-home.svg";
import Avatar from "@/assets/entertainment-web-app/image-avatar.png";

function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.main}>
      <div className={styles.main__content}>
        <Logo className={styles.main__logo} />

        <div className={styles.main__group}>
          <Link href={"/entertainment/category"}>
            <Category
              className={classNames({
                [styles.main__active]:
                  router.pathname == "/entertainment/category",
              })}
            />
          </Link>
          <Link href={"/entertainment/movies"}>
            <Clip
              className={classNames({
                [styles.main__active]:
                  router.pathname == "/entertainment/movies",
              })}
            />
          </Link>
          <Link href={"/entertainment/tv"}>
            <TV
              className={classNames({
                [styles.main__active]: router.pathname == "/entertainment/tv",
              })}
            />
          </Link>
          <Link href={"/entertainment/bookmark"}>
            <Bookmark
              className={classNames({
                [styles.main__active]:
                  router.pathname == "/entertainment/bookmark",
              })}
            />
          </Link>
        </div>

        <Image src={Avatar} alt="avatar" className={styles.main__avatar} />
      </div>
    </nav>
  );
}

export default NavBar;
