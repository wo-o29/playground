import Head from "next/head";

type MetaDataProps = {
  title?: string;
};

export default function MetaData({ title = "Next-Auth" }: MetaDataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content="Next-Auth" />
      <meta name="keyword" content="Next-Auth" />
      <meta name="description" content="Next-Auth" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
      <meta name="theme-color" content="#84A59D" />
    </Head>
  );
}
