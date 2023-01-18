import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

console.log(process.env.NEXT_PUBLIC_MAPBOX_TOKEN)
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  ) 
}

export default MyApp
