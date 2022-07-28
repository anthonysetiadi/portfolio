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
        <link rel="apple-touch-icon" href="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Anthony Setiadi Portfolio" />
        <meta
          name="description"
          content="Anthony Setiadi is a front-end developer who specializes in building web applications."
        />
        <meta name="keywords" content="Anthony Setiadi, Portfolio, Developer" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://antz.dev" />
        <meta
          property="og:title"
          content="Anthony Setiadi is a front-end developer who specializes in building web applications."
        />
        <meta
          property="og:description"
          content="Anthony Setiadi is a front-end developer who specializes in building web applications."
        />
        {/* <meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://www.wunderkid.com.au' />
				<meta
					property='twitter:title'
					content='Exciting activities for kids to discover their true talent.'
				/>
				<meta
					property='twitter:description'
					content='Find the best activities for kids and discover their true talent - all made possible by providers on Wunderkid.'
				/> */}
        {/* Things to be filled later
				<meta
					property="og:image"
					content="https://www.flytree.co/images/Flytree-OG-Image.jpg"
				/>
				<meta
					property="twitter:image"
					content="https://www.flytree.co/images/Flytree-OG-Image.jpg"
				/>
				<link
					rel="preload"
					as="image"
					href="https://ik.imagekit.io/flytree/Flytree-front-page_199DWSYmX.webp"
				/>
				*/}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <title>Anthony Setiadi - Homepage</title>
      </Head>
      {content}
    </>
  )
}

export default Portfolio
