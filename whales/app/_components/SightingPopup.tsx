import React from 'react'
import { Popup } from 'react-leaflet'
import { SightingData } from '../SightingData';
import { GiSpermWhale } from "react-icons/gi";
import './SightingPopup.css'


interface Props {
  data: SightingData;

}

const SightingPopup = (props: Props) => {
  return (
    <Popup  >

      <div className='h-96 w-96 flex flex-col justify-center rounded-xl bg-orange-100'>
        {/* Header */}
        <div className='h-20 w-full rounded-t-xl bg-cyan-700 flex-row'>
          <div className='flex flex-row ms-5 justify-between'>
            <div className='flex-col'>
              <div className='h-10 justify-end flex flex-col'>
                <div className=' text-2xl text-orange-100 font-bold leading-6'>
                  {props.data.vernacularName}
                </div>
              </div>
              <div className='h-10'>
                <div className='text-lg text-orange-100 italic leading-6'>
                  {props.data.species}
                </div>
              </div>
            </div>
            <div className='w-20 h-20 flex flex-col items-center justify-center'>
              {/* TODO update this based on whale/dolphin/maybe type of whale too */}
              <GiSpermWhale className='w-15 h-15 text-orange-100 ' />
            </div>
          </div>

        </div>
        {/* <h3>{props.data.species}</h3>
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
      <p>type: {props.data.type}</p> */}
        <div className='flex-1 '>
          test
        </div>

        {/* Footer */}
        <div className='h-10 w-full rounded-b-xl bg-cyan-700'>

        </div>
      </div>
    </Popup>
  )
}

export default SightingPopup