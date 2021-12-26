import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
// import L from 'leaflet';

import 'leaflet/dist/leaflet.css'
import '../css/leaflet.css'
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import style from '../css/main.module.scss'
import { useState, useEffect } from 'react';

// const MarkerIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow
//   // iconAnchor: [14, 20],
//   // iconSize: [14, 20]
// })

function Map(props) {
  const [position, setPosition] = useState([51.505, -0.09])
  const [city, setCity] = useState('London')

  useEffect(() => {
    if (props.dataIp) {
      setPosition([props.dataIp.location.lat, props.dataIp.location.lng])
      setCity(props.dataIp.location.city)
    }
  }, [props.dataIp])

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
  
  return (
    <div className={ style.map }>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <ChangeView center={position} zoom={13} /> 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {city}
        </Popup>
      </Marker>
      </MapContainer>
    </div>
  );
}
  
export default Map;
