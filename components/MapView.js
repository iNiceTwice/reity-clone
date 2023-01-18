import { useEffect } from "react";
import { Map, Marker } from 'mapbox-gl'; 

const MapView = ({ lng, lat, id }) => {
    
    useEffect(()=>{
        const map = new Map({
            container: id, 
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng,lat],
            zoom: 18, 
        });
        const pin = new Marker().setLngLat([lng,lat]).addTo(map)
    },[lat,lng,id])
    return ( 
        <>
            <div id={id} className="h-full w-full"></div>
        </>
     );
}
 
export default MapView;