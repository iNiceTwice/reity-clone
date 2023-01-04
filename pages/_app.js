import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}

export default MyApp
