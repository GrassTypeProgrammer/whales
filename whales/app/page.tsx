'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { SightingData } from './_components/Map';
import DmsCoordinates from 'dms-conversion';

const Map = dynamic(() => import('./_components/Map'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

// function ConvertDDToDMS(D: number, lng: boolean) {
//   return {
//     dir: D < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
//     deg: 0 | (D < 0 ? (D = -D) : D),
//     min: 0 | (((D += 1e-9) % 1) * 60),
//     sec: (0 | (((D * 60) % 1) * 6000)) / 100,
//   };
// }

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [sightings, setSightings] = useState<SightingData[]>([]);

  useEffect(() => {
    axios.get('https://api.obis.org/v3/occurrence?scientificname=Balaenoptera musculus&startdate=2025-01-01')
      .then(response => {
        setData(response.data);
        setSightings(response.data.results.map((data) => {
          // get coords
          const coords = new DmsCoordinates(data.decimalLatitude, data.decimalLongitude);
          let longitude: number = coords.longitude.dmsArray[0];
          let latitude: number = coords.latitude.dmsArray[0];

          // apply negative based on hemisphere
          if (coords.longitude.hemisphere == 'W') {
            longitude *= -1;
          }

          if (coords.latitude.hemisphere == 'S') {
            latitude *= -1;
          }

          const sighting: SightingData = {
            longitude,
            latitude,
            id: data.id,
          }

          return sighting;
        }));

        // TODO: remove
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [])

  return (
    <div>

      <div>Whales</div>

      <div id="map" className='h-44'>
        <Map sightings={sightings} />
      </div>
    </div>
  );
}
