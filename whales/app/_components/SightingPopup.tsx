import React from 'react'
import { Popup } from 'react-leaflet'
import { SightingData } from '../SightingData';
import { GiSpermWhale } from "react-icons/gi";
import './SightingPopup.css'


interface Props {
  data: SightingData;

}

const SightingPopup = (props: Props) => {
  let kmFromShore: number = props.data.coordinateUncertaintyInMeters / 1000;
  kmFromShore = Math.round(kmFromShore * 100) / 100;

  return (
    <Popup  className='w-96' closeButton={false} >
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
              <GiSpermWhale className='w-15 h-15 text-orange-100' />
            </div>
          </div>
        </div>

        {/* Body */}
        <div className='flex flex-col flex-1 m-5'>
          <div className='w-full text-center text-cyan-700 text-2xl'>
            {props.data.locality}
          </div>
          <div className='flex flex-col flex-1 justify-center'>

          <div className='mt-3'>
            <p className='text-cyan-700 text-lg leading-5'>Count: {props.data.individualCount}</p>
            <p className='text-cyan-700 text-lg leading-6'>Distance from shore: {props.data.shoredistance}km</p>
            <p className='text-cyan-700 text-lg leading-6'>Accuracy: {kmFromShore}km</p>
            <p className='text-cyan-700 text-lg leading-6'>Basis of record: {props.data.basisOfRecord}</p>
            <p className='text-cyan-700 text-lg leading-6'>{props.data.identificationRemarks}</p>
            <p className='text-cyan-700 text-lg leading-6'>Long/Lat: {props.data.longitude}/{props.data.latitude}</p>
          </div>
          </div>

        </div>

        {/* Footer */}
        <div className='h-10 w-full rounded-b-xl bg-cyan-700 items-center flex flex-row'>
          <div className='flex flex-row max-h-6 w-full justify-end ms-5 me-5'>
            <p className='text-orange-100 text-base'>{props.data.day}/{props.data.month}/{props.data.year}</p>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default SightingPopup