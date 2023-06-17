import React from 'react';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[13.0833821,80.2668188]}
      zoom={13}
      style={{ height: '40rem', width: '100' }}
      scrollWheelZoom={true}
    >
      <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={[51.505, -0.09]} /> */}
    </MapContainer>
  );
};

export default Map;
