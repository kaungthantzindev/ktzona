import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import ProductSample from '../components/Products/ProductSample'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ktzona | Home page</title>
        <meta name="description" content="shopping cart application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Layout />
      <ProductSample />
    </div>
  )
}
