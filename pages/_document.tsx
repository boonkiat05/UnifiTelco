import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 这里放你的favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
