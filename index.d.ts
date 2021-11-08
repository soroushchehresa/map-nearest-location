declare module "map-nearest-location" {
  export type geoCord = {
    lat: number;
    lng: number;
  };
  export default function findNearestLocation(
    myLocation: geoCord,
    locations: geoCord[]
  ): {
    location: geoCord;
    distance: number;
  };
}
