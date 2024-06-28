import type { AppProps } from "next/app";
import Toast from "@/components/Toast";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toast limit={3} autoClose={3000} />
    </>
  );
}
