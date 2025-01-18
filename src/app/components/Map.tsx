'use client'
import React from "react";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const Map=() => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Logic using Leaflet or any browser-specific APIs
    }
  }, []);
  return (
    <div className="h-[500px] z-10">
      <MapContainer 
        center={[22.7179054, 75.8820924]} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[22.7179054, 75.8820924]}>
          <Popup>
            Our Location <br /> Office No. 306, 3rd Floor , Apollo Trade Center , Geeta Bhawan Square , Indore, Madhya Pradesh 452001
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map;

