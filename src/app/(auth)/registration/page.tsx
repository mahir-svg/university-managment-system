import Link from "next/link";
import styles from "./registration.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        

        <form>

         <div className={styles['header']}>
            <div className={styles['logo']}>🎓</div>
            <h2 className={styles['title']}>University portal</h2>
            <h1 className={styles['title']}>Registration Form</h1>
        </div>
       

          <div className={styles.group}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className={styles.group}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.group}>
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <button className={styles.btn} type="submit">
            Register
          </button>
        </form>

       
        <p className={styles.loginText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}