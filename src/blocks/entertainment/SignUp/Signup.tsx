import classNames from "classnames";

import styles from "./Signup.module.scss";

import Logo from "@/assets/entertainment-web-app/logo.svg";

function SignUp() {
  return (
    <section className={styles.main}>
      <Logo className={styles.main__logo} />

      <div className={styles.main__container}>
        <h1 className={styles.main__title}>Sign Up</h1>
        <input type="text" className={styles.main__input} placeholder="Email" />
        <input
          type="password"
          className={classNames(styles.main__input, styles.main__password)}
          placeholder="Password"
        />
        <input
          type="password"
          className={classNames(styles.main__input, styles.main__password)}
          placeholder="Repeat Password"
        />
        <button className={styles.main__button}>Login to your account</button>

        <p className={styles.main__cta}>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
