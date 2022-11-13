import React from 'react';
import './leaflet.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.2/dist/leaflet.css"
        integrity="sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14="
        crossorigin=""
      />
      <MapContainer center={[40.712776, -74.005974]} zoom={12} height={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
      ;
    </div>
  );
}

export default Map;
