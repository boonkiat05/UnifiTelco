import { Html, Head, Main, NextScript } from 'next/document' 
export default function Document() 
{ return ( <Html lang="en"> <Head>
  <link rel="manifest" href="/manifest.json" />
  <meta name="robots" content="index, follow" />
  {/* 这里放你的favicon */} 
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
</Head> 
  <body>
    <Main /> 
    <NextScript /> 
  </body> 
</Html> ) }
