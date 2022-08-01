import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

function Portfolio({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || (page => <Layout>{page}</Layout>)
  const content = getLayout(<Component {...pageProps} />)
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#1a202c"
        />
        <meta name="msapplication-TileColor" content="#1a202c" />
        <meta name="theme-color" content="#f8f8fa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Anthony Setiadi" />
        <meta name="description" content="Anthony Setiadi" />
        <meta name="keywords" content="Anthony Setiadi, Portfolio, Developer" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:title" content="Anthony Setiadi" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Anthony Setiadi" />
        <meta
          property="og:image"
          content="https://ik.imagekit.io/antz/DSC00410_1__San4RSY04.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657780111677"
        />
        <meta property="og:url" content="https://antz.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Anthony Setiadi - Homepage</title>
      </Head>
      {content}
    </>
  )
}

export default Portfolio
