import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/404.module.css";
import Fireworks from "@fireworks-js/react";

export default function NotFound() {
  return (
    <>
      <Fireworks
        autostart={true}
        options={{
          particles: 200, // 입자의 수
          traceLength: 10, // 입자의 길이
          traceSpeed: 2, // 입자의 속도
          delay: { min: 100, max: 100 }, // 입자 생성 지연 시간 범위
          brightness: { min: 30, max: 100 }, // 밝기 범위
          decay: { min: 0.01, max: 0.02 }, // 소멸 속도 범위
        }}
        style={{ width: "100vw", height: "calc(100vh - 5px)" }}
      >
        <div className={styles.container}>
          <p className={styles.title}>404</p>
          <Image className={styles.image} src="/images/t.svg" width={320} height={500} alt="" />
          <p className={styles.text}>존재하지 않는 페이지입니다.</p>
          <div className={styles.box}>
            <Link className={styles.button} href="/">
              메인으로 돌아가기
            </Link>
          </div>
        </div>
      </Fireworks>
    </>
  );
}
