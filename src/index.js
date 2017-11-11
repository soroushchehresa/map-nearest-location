import distance from './distance';

module.exports = function (latLng, locations) {
  let closestDistance = distance(latLng, locations[ 0 ]);
  let closest = locations[ 0 ];
  for (let i = 1; i < locations.length; i++) {
    const dis = distance(locations[ i ], latLng);
    if (dis < closestDistance) {
      closestDistance = dis;
      closest = locations[ i ];
    }
  }
  return {
    location: closest,
    distance: closestDistance
  };
};