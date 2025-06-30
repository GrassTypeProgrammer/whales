'use client'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { GiSpermWhale } from "react-icons/gi";
import { DivIcon } from 'leaflet';
import ReactDOMServer from 'react-dom/server';

const customIcon = new DivIcon({
  className: '', // avoid Leaflet default styles
  html: ReactDOMServer.renderToString(
    <GiSpermWhale className='h-8 w-8'/>
  ),
  iconSize: [32, 32],
  // iconAnchor: [12, 24], // center bottom
});

export type SightingData ={
  id: number,
  latitude: number,
  longitude: number,
}

interface Props {
  sightings: SightingData[],
}

const Map = (props: Props) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={1}
      scrollWheelZoom={false}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.sightings &&
        props.sightings.map((sighting)=>{
          return <Marker key={sighting.id} icon={customIcon} position={[sighting.latitude, sighting.longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        })
      }
      
    </MapContainer>
  )
}

export default Map