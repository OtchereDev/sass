import classNames from "classnames";

import styles from "./Login.module.scss";

import Logo from "@/assets/entertainment-web-app/logo.svg";

function Login() {
  return (
    <section className={styles.main}>
      <Logo className={styles.main__logo} />

      <div className={styles.main__container}>
        <h1 className={styles.main__title}>Login</h1>
        <input type="text" className={styles.main__input} placeholder="Email" />
        <input
          type="password"
          className={classNames(styles.main__input, styles.main__password)}
          placeholder="Password"
        />
        <button className={styles.main__button}>Login to your account</button>

        <p className={styles.main__cta}>
          Don&apos;t have an account <span>Sign Up</span>
        </p>
      </div>
    </section>
  );
}

export default Login;
