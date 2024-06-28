import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "@/styles/main.module.css";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className={styles.wrap}>
        <h1>Next-Auth Playground</h1>
        <div className={styles.box}>
          {!session?.user && (
            <Link className={styles.btn} href="/login">
              로그인 페이지 이동
            </Link>
          )}
          <button
            className={styles.btn}
            type="button"
            onClick={() => signOut()}
          >
            로그아웃
          </button>
        </div>
        <h2>로그인 상태: {session?.user ? "O" : "X"}</h2>
        {session?.user && <h2>{`닉네임: ${session?.user.name}`}</h2>}
      </div>
    </>
  );
}
