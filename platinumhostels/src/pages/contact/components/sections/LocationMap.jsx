import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import "leaflet/dist/leaflet.css";

export default function LocationMap() {
  const position = [6.673175, -1.565423];
  return (
    <div className='overflow-hidden rounded-lg h-full min-h-[300px] w-full'>
         <MapContainer 
            center={position} 
            zoom={13} 
            scrollWheelZoom={true} 
            style={{height: '100%', width: '100%'}}
        >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker 
                    position={position} 
                    icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} 
                >
                    <Popup>
                        Our location
                    </Popup>
                </Marker>
        </MapContainer>
    </div>
  )
}
