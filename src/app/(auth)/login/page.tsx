import Link from "next/link";
import styles from "./login.module.css";
import style from "styled-jsx/style";


export default function LoginPage() {
  return (


    
    <div className={styles['login-container']}>
      <div className={styles['login-box']}>
        

        <form>
         <div className={styles['header']}>
            <div className={styles['logo']}>🎓</div>
            <h2 className={styles['title']}>University portal</h2>
            <h1 className={styles['title']}>Login Form</h1>
        </div>
       

          <div className={styles['input-group']}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles['input-group']}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          
         

          <button type="submit" className={styles['login-btn']}>
            Login
          </button>

           <div className={styles['register-link']}>
            <>Don't have an account?</>
            <Link href="/registration" >
               Register
            </Link> 
          </div>
        </form>
      </div>
    </div>
  );
}