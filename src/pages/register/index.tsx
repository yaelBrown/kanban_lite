import "../../app/globals.css";
import React from "react";
import Link from "next/link";
import styles from "./Register.module.css";

export default function Register() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.registerBox}>
        <button className={styles.googleButton} style={{ marginBottom: "1.5rem", marginTop: 0 }} disabled>
          <span className={styles.googleIcon}>🔒</span>
          Register with Google
        </button>
        <h2 className={styles.heading}>Register</h2>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            autoComplete="username"
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            autoComplete="email"
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            autoComplete="new-password"
          />
          <button
            type="submit"
            className={styles.registerButton}
          >
            Register
          </button>
        </form>
        <div className={styles.linksBox}>
          <span className={styles.loginText}>
            Already have an account?{' '}
            <Link href="/login" className={styles.loginLink}>Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}