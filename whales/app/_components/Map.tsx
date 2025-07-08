'use client'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GiSpermWhale } from "react-icons/gi";
import { DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';
import { SightingData } from '../SightingData';
import SightingPopup from './SightingPopup';

const customIcon = new DivIcon({
  className: '', // avoid Leaflet default styles
  html: ReactDOMServer.renderToString(
    <GiSpermWhale className='h-8 w-8'/>
  ),
  iconSize: [32, 32],
  // iconAnchor: [12, 24], // center bottom
});


interface Props {
  sightings: SightingData[],
}

const Map = (props: Props) => {
  return (
    <MapContainer
      center={[15.505, -0.09]}
      zoom={2}
      scrollWheelZoom={false}
      style={{ height: '40rem', width: '70rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.sightings &&
        props.sightings.map((sightingData)=>{
          return <Marker key={sightingData.id} icon={customIcon} position={[sightingData.latitude, sightingData.longitude]}>
          <SightingPopup data={sightingData}/>
        </Marker>
        })
      }
      
    </MapContainer>
  )
}

export default Map