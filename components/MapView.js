import { useLayoutEffect } from "react";
import { Map, Marker } from 'mapbox-gl'; 

const MapView = ({ lng, lat, id }) => {
    
    useLayoutEffect(()=>{
        const map = new Map({
            container: id, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [lng,lat], // starting position [lng, lat]
            zoom: 18, // starting zoom
        });
        const pin = new Marker().setLngLat([lng,lat]).addTo(map)
    },[])
    return ( 
        <>
            <div id={id} className="h-full w-full">

            </div>
        </>
     );
}
 
export default MapView;