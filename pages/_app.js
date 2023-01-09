import Footer from '../layout/Footer'
import Nav from '../layout/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  //<Nav/>
  //<Footer/>
  return(
    <>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
