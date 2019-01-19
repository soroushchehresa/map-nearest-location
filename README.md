# map-nearest-location

[![NPM](https://img.shields.io/npm/v/map-nearest-location.svg)](https://www.npmjs.com/package/map-nearest-location)

Simple library to find the nearest location and get distance from locations list without network request.

## Install

  `npm i -S map-nearest-location`

  or

  `yarn add map-nearest-location`

## Usage

```

 import findNearestLocation from 'map-nearest-location';

 const myLocation = {
   lat: 40.7153043,
   lng: -74.1037503
 };

 const locations = [
   {
     lat: 40.7722691,
     lng: -74.3008176
   },
   {
     lat: 40.682638,
     lng: -73.941015
   },
   {
     lat: 40.870347,
     lng: -74.105810
   },
   {
     lat: 40.7374197,
     lng: -74.2719785
   }
 ];

 const nearestLocation = findNearestLocation(myLocation, locations);

```

## Output

```

 {
   location: {
      lat: 40.682638,
      lng: -73.941015
   },
   distance: 14191.625245346084 // meter
 }

```
