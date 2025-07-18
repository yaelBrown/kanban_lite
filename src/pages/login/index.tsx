import "../../app/globals.css";
import React from "react";
import Link from "next/link";
import styles from "./Login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.pageBg}>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Sign In</h2>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            className={styles.input}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            autoComplete="current-password"
          />
          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>
        </form>
        <button
          className={styles.googleButton}
          disabled
        >
          <span className={styles.googleIcon}>🔒</span>
          Sign in with Google
        </button>
        <div className={styles.linksBox}>
          <span className={styles.registerText}>
            Don&apos;t have an account?{' '}
            <Link href="/register" className={styles.registerLink}>Register</Link>
          </span>
          <Link href="/reset-password" className={styles.resetLink}>Forgot password?</Link>
        </div>
      </div>
    </div>
  );
}