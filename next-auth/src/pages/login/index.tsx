import { signIn } from "next-auth/react";
import styles from "./style.module.css";

export default function login() {
  return (
    <>
      <div className={styles.wrap}>
        <button
          className={styles.kakaoBtn}
          type="button"
          onClick={() => signIn("kakao", { callbackUrl: "/" })}
        >
          카카오톡 로그인
        </button>
        <button
          className={styles.googleBtn}
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          구글 로그인
        </button>
      </div>
    </>
  );
}
