import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="robots" content="index, follow" />
        <title>Daftar Unifi Malaysia – Compare & Apply TM Fiber Broadband Plans</title>
        <meta
          name="description"
          content="Compare and apply TM Unifi Malaysia broadband plans online. Fast, easy registration with coverage nationwide."
        />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ✅ 字体优化开始 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        {/* ✅ 字体优化结束 */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

