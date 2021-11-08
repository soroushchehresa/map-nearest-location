declare module "map-nearest-location" {
  export type geoCord<T = {}> = {
    lat: number;
    lng: number;
  } & T;
  export default function findNearestLocation<T = {}>(
    myLocation: geoCord,
    locations: (geoCord & T)[]
  ): {
    location: geoCord & T;
    distance: number;
  };
}
