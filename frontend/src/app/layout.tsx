import Head from 'next/head'
import './globals.css'
import Header from '@components/Header';
import Footer from '@components/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <body>
      <Header/>
        <main>{children}</main>
      <Footer/>
      </body>
    </>
  )
}

