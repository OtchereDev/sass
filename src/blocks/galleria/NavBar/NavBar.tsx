import Link from "next/link";
import styles from "./NavBar.module.scss";

import Logo from "@/assets/galleria/shared/logo.svg";

function NavBar({ start }: { start: boolean }) {
  return (
    <section className={styles.main}>
      <Link href={"/galleria"}>
        <Logo />
      </Link>

      <Link href={start ? "/galleria/slideshow" : "/galleria"}>
        <button>{start ? "START" : "STOP"} SLIDESHOW</button>
      </Link>
    </section>
  );
}

export default NavBar;
