import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 

mapboxgl.accessToken = 'pk.eyJ1IjoibmljZXR3aWNlIiwiYSI6ImNsZDFzamFpaTAxcGczdmxhNms0MXJtd2IifQ.yDcQI7E2unCgrom7FhtD6w';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
