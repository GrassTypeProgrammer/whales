import React from 'react'
import { Popup } from 'react-leaflet'
import { SightingData } from '../SightingData';



interface Props{
    data: SightingData;
    
}

const SightingPopup = (props: Props) => {
  return (
    <Popup>
        <h3>{props.data.species}</h3>
        <p>Count: {props.data.individualCount}</p>
        <p>basisOfRecord: {props.data.basisOfRecord}</p>
        <p>coordinateUncertaintyInMeters: {props.data.coordinateUncertaintyInMeters}</p>
        <p>dateIdentified: {props.data.dateIdentified}</p>
        <p>year: {props.data.year}</p>
        <p>day: {props.data.day}</p>
        <p>month: {props.data.month}</p>
        <p>locality: {props.data.locality}</p>
        <p>waterBody: {props.data.waterBody}</p>
        <p>identificationRemarks: {props.data.identificationRemarks}</p>
        <p>shoredistance: {props.data.shoredistance}</p>
        <p>type: {props.data.type}</p>

          </Popup>
  )
}

export default SightingPopup