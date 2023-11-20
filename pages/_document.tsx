import { Footer, Navbar } from '@/components'
import { Html, Head, Main, NextScript } from 'next/document'



export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='relative'>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  )
}
