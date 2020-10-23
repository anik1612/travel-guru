import React from "react";
import './Map.css'

import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };

const points = [
  { id: 1, title: "Round Pond", lat: 23.777176, lng: 90.399452 },
  { id: 2, title: "The Long Water", lat: 21.555999, lng: 88.505999 },
  { id: 3, title: "The Serpentine", lat: 24.3065, lng: 91.7296 },
  { id: 4, title: "The Serpentine", lat: 21.4272, lng:  92.0058 }
  //all this four marker mark dhaka, sudarban, sreemangal and coxz bazar..    
];

export default function Map() {
  return (
    <div className="App">
      
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyAGp7Euf5MZejemqus79lKuKW1LViNULw0",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
        defaultZoom={7}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}